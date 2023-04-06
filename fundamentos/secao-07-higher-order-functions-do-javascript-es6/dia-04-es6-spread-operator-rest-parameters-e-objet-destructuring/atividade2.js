
const user = {
	name: 'Maria',
	age: 21,
	nationality: 'Brazilian',
  };
  
  const jobInfos = {
	profession: 'Software engineer',
	squad: 'Rocket Landing Logic',
	squadInitials: 'RLL',
  };

  const TodosDados = {...user, ...jobInfos}

  const mensagem = ({name, age, nationality, profession, squad, squadInitials}) => {
	return `Hi, my name is ${name}, i'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
  }

  console.log(mensagem(TodosDados))