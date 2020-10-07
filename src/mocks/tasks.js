import { v4 as uuidv4 } from 'uuid';
let tasks = [
        {   
            id: uuidv4(),
            name: 'Gym',
            level: 1
        },
        { 
            id: uuidv4(),
            name: 'Def Lorem Ipsum is simply. Lorem Ipsum has been the industry',
            level: 0
        },
        {
            id: uuidv4(),
            name: 'Ghi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            level: 2
        }
];

export default tasks;