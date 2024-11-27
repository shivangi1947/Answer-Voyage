
// const offcanvasElementList = document.querySelectorAll('.offcanvas')
// const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))



// const userDetailsDiv = document.getElementById('userDetails');

// Define the URL you want to fetch data from
// const url = 'http://localhost:4000/auth/home'; // Replace with your actual API endpoint

// // Use the Fetch API to make a GET request
// fetch(url)
//   .then((response) => {
//     // Check if the response status is OK (status code 200)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // Parse the response body as JSON
//     return response.json();
//   })
//   .then((data) => {
//     // Handle the JSON data
//     data=JSON.stringify(data);
//     console.log(data);
   
//     document.querySelector('.box-3').innerHTML = data;
//   })
//   .catch((error) => {
//     // Handle errors
//     console.error('Fetch error:', error);
//     // Display an error message or take appropriate action here
//   });

const fetchData = async () => {
    const url = 'http://localhost:4000/auth/home'; // Replace with your actual API endpoint
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const user = data.Question; // Rename to "user" for clarity
      const mail = data.Answer;
      const ans= data.Ans;
      // Handle the JSON data
      console.log(mail);
      console.log(ans);
      function chunkArray(array, chunkSize) {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          chunkedArray.push(array.slice(i, i + chunkSize));
        }
        return chunkedArray;
      }
      
      // Assuming you have an array of users
      const allUsers = [
        { username: 'user1' },
        { username: 'user2' },
        { username: 'user3' },
        { username: 'user4' },
        { username: 'user5' },
        { username: 'user6' },
      ];
      
      const chunkSize = 1; // Specify the number of users in each chunk
      const userChunks = chunkArray(user, chunkSize);
      //const usech = chunkArray(mail.chunkSize)
      // Now, userChunks will contain an array of arrays, each with up to "chunkSize" users
      console.log(userChunks);
    //   console.log(usech);
      //console.log(data);
      document.querySelector('.used').textContent=mail[0];
      document.querySelector('.myname1').textContent=mail[0];
      document.querySelector('.myname2').textContent=mail[1];
      document.querySelector('.myname3').textContent=mail[2];
      document.querySelector('.myname4').textContent=mail[3];
      document.querySelector('.myname5').textContent=mail[4];
      document.querySelector('.myname6').textContent=mail[5];

      document.querySelector('.myques1').textContent = userChunks[0];
      document.querySelector('.myques2').textContent = userChunks[1];
      document.querySelector('.myques3').textContent = userChunks[2];
      document.querySelector('.myques4').textContent = userChunks[3];
      document.querySelector('.myques5').textContent = userChunks[4];
      document.querySelector('.myques6').textContent = userChunks[5]; 
      document.querySelector('.myans1').textContent = ans[0]; // Set textContent directly
      document.querySelector('.myans2').textContent = ans[1];
      document.querySelector('.myans3').textContent = ans[2];
      document.querySelector('.myans4').textContent = ans[3];
      document.querySelector('.myans5').textContent = ans[4];
      document.querySelector('.myans6').textContent = ans[5];
     
      //   document.querySelector('.toans1').textContent = userChunks[0];
    //   document.querySelector('.toans2').textContent = userChunks[1];
    //   document.querySelector('.toans3').textContent = userChunks[2];
    //   document.querySelector('.toans4').textContent = userChunks[3];
    //   document.querySelector('.toans5').textContent = userChunks[4];
    //   document.querySelector('.toans6').textContent = userChunks[5];
      // Get the input element by its ID
        const s = userChunks[0]; // Assuming userChunks[1] contains the value you want to set

        // Get the input element
        const myInput = document.getElementById("myInput1");

        // Set the value of the input element
        myInput.value = s;


    } catch (error) {
      // Handle errors
      console.error('Fetch error:', error);
      // Display an error message or take appropriate action here
    }
  };
  
  // Call the fetchData function to initiate the fetch request
  fetchData();
  
  