using FullStack.API.Data;
using FullStack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        public readonly FullStackDbContext Context;
        public EmployeesController(FullStackDbContext fullStackDbContext)
        {
            this.Context = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await Context.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> InsertEmployee([FromBody]Employee employee)
        {
            employee.Id = Guid.NewGuid();
            await Context.Employees.AddAsync(employee);
            await Context.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetParticularEmployee([FromRoute]Guid id)
        {
            Employee employee = await Context.Employees.FirstOrDefaultAsync<Employee>(x => x.Id == id);
            if(employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updateEmployeeData)
        {
            Employee employee = await Context.Employees.FindAsync(id);
            if(employee == null) { return NotFound(); }
            employee.Name = updateEmployeeData.Name;
            employee.Email = updateEmployeeData.Email;
            employee.Phone = updateEmployeeData.Phone;
            employee.Salary = updateEmployeeData.Salary;
            employee.Department = updateEmployeeData.Department;
            await Context.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await Context.Employees.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }
            Context.Employees.Remove(employee);
            await Context.SaveChangesAsync();
            return Ok(employee);
        }
    }
}
