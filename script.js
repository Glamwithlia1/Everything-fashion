//form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
    e.preventDefault();
// get form values  
const firstname = this.elements[0].value;
const lastname = this.elements[1].value;
const email = this.elements[2].value;
const bestpicks  = this.elements[2].value

//in real scenario,you would send this data to a server
console.log("Lead Captured:") (firstname,lastname,email,bestpicks)

//show configuration
alert("Thank you for your interest! We will contact you shortly with our fashion details")

// Reset form
this.reset()

})
