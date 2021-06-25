using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RegistrationUser.Models
{
    public class Users
    {
        [Key]
        public int User { get; set; }
        [Display(Name = "First Name")]
        [Required]
       
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        [Required]
        public string LastName { get; set; }
        //public string Address { get; set; }
        [Display(Name = "Email")]
        [DataType(DataType.EmailAddress)]
        [Required]
        public string Email { get; set; }
        [Display(Name = "Mobile ")]
        [Required]
        public string Mobile { get; set; }
        [Display(Name = "Username")]
        [Required]
        public string Username { get; set; }
    }
}