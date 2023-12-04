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

    }
}
