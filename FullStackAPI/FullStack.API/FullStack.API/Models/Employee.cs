namespace FullStack.API.Models
{
    public class Employee
    {
        //public int MyProperty { get; set; }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }
    }
}
