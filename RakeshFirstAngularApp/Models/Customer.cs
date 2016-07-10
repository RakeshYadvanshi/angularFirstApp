using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RakeshFirstAngularApp.Models
{
    public class Customer
    {
        [Required]
        [MinLength(3, ErrorMessage = "Minimum Length should be more than 2")]
        [MaxLength(10, ErrorMessage = "Max Length should be less than 10")]

        public string FirstName { get; set; }


        [Required]
        [MinLength(3, ErrorMessage = "Minimum Length should be more than 2")]
        [MaxLength(10, ErrorMessage = "Max Length should be less than 10")]
        public string LastName { get; set; }


        [Required]

        public string City { get; set; }
    }
}