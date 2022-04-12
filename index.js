// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//   .then(res => res.json())
//   .then(object => console.log(object))

  

  
  const submitData = (username, useremail) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: useremail,
        })
    }
      return fetch("http://localhost:3000/users", configurationObject)
      .then(res => res.json())
      .then(object => document.querySelector("body").append(`${object.id}`))
      .catch(error => document.querySelector("body").append(error.message))
      
  }

  submitData('danny', '999@gmail.com')

  