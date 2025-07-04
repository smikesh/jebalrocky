// Create a new Date object for the current date
const today = new Date();

// Get the day, month, and year
const day = today.getDate();
const month = today.getMonth() + 1; // Months are zero-indexed, so add 1
const year = today.getFullYear();

// Format the date as 'DD/MM/YYYY' or in any other desired format
const formattedDate = `${day}-${month}-${year}`;
export  const data = [
    {   id:1,
        title:"Welder",
        post_date:formattedDate, 
        no_of_vecancy:25,
        description:` We are seeking skilled and experienced welders for various welding tasks, including MIG, TIG, Stick, and Arc welding`
    },
    {   id:2,
        title:"Fabricator",
        post_date:formattedDate, 
        no_of_vecancy:25,
        description:` We are seeking skilled and experienced Fabricators for various various fabrication jobs`
    },
    {   id:3,
        title:"Plumbers",
        post_date:formattedDate, 
        no_of_vecancy:25,
        description:` We are seeking skilled and experienced Plumbers for various various plumbing jobs`
    },
    {   id:4,
        title:"Painters",
        post_date:formattedDate, 
        no_of_vecancy:25,
        description:` We are seeking skilled and experienced Painters for various  Painting jobs`
    },
    {   id:5,
        title:"Scaffolders",
        post_date:formattedDate, 
        no_of_vecancy:25,
        description:` We are seeking skilled and experienced Scaffolders for various  Scaffolding jobs`
    },
    {   id:6,
        title:"Carpenters",
        post_date:formattedDate, 
        no_of_vecancy:25,
        description:` We are seeking skilled and experienced Carpenters for various Carpenting jobs`
    },
    {   id:7,
        title:"Helpers",
        post_date:formattedDate, 
        no_of_vecancy:25,
        description:` We are seeking skilled and experienced Helpers for various departments`
    },

    
    
    
    

];