let skills : string= ['Bash','Counter','Healing'];

interface Character{
    name: string;
    hp: number; 
    skills: string[];
    hometown?: string;
}
const strider :Character= {
    name: 'Striper', 
    hp: 100, 
    skills: ['Bash','Counter']
}


export{}