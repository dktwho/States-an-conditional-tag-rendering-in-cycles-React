import { nanoid } from "nanoid";

const generateId = () => {
  return nanoid()
}


const initNotes = [
	{
		id: generateId(),
		name: 'name1',
		desc: 'long description 1',
    show: false,
	},
	{
		id: generateId(),
		name: 'name2',
		desc: 'long description 2',
    show: false,
	},
	{
		id: generateId(),
		name: 'name3',
		desc: 'long description 3',
    show: false,
	},
];

const initProds = [
	{
		id: generateId(),
		name: 'prod1',
		cost: 'cost1',
		desc: 'long description 1',
		comm: 'my super comment 1'
	},
	{
		id: generateId(),
		name: 'prod2',
		cost: 'cost2',
		desc: 'long description 2',
		comm: 'my super comment 2'
	},
	{
		id: generateId(),
		name: 'prod3',
		cost: 'cost3',
		desc: 'long description 3',
		comm: 'my super comment 3'
	},
];

export {initNotes, generateId, initProds}
