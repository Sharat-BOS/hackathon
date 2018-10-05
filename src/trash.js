//Fetch Call using Browser Native Fetch API
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => {          
           // if (response.ok) {
            //    return response.json();
            //  } else {
             //   throw new Error('Something went wrong ...');
            //  }
        //})
        // .then(data => {           
        //     debugger;
        //     this.setState({ loading: false, users: data });
        //      }).catch(error=>{ 
        //          debugger;
        //         this.setState({ loading: false, error: error });
        //      });

//COmponent Lifecycle Events
        // componentWillMount() {
        //     console.log('Component WILL MOUNT!')
        //  }
        //  componentDidMount() {
        //     console.log('Component DID MOUNT!')
        //     debugger;
        //     this.setState({loading:true});
            
        //     axios.get(`https://jsonplaceholder.typicode.com/users`)
        //     .then(res => {
        //      debugger; 
        //       const persons = res.data;
        //       this.setState({ loading: false, users: persons });
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //         this.setState({ loading: false, error: error });
        //       })       
        //  }
        //  componentWillReceiveProps(newProps) {    
        //     console.log('Component WILL RECIEVE PROPS!')
        //  }
        //  shouldComponentUpdate(newProps, newState) {
        //     return true;
        //  }
        //  componentWillUpdate(nextProps, nextState) {
        //     console.log('Component WILL UPDATE!');
        //  }
        //  componentDidUpdate(prevProps, prevState) {
        //     console.log('Component DID UPDATE!')
        //  }
        //  componentWillUnmount() {
        //     console.log('Component WILL UNMOUNT!')
        //  }


        /***************************Password Validation **********************/
        // var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {  
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }
  
//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {  
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {  
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }
  
//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }