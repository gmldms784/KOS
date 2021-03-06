import React, {
	useState, createContext, useContext, Dispatch
} from 'react';

/* open context */
// create context to use open
type childrenObj = {
	children: React.ReactNode;
}

export const OpenStateContext = createContext<boolean>(true);
export const OpenDispatchContext = createContext<Dispatch<boolean> | undefined>(undefined);

export const OpenContextProvider = ({ children } : childrenObj) => {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<OpenStateContext.Provider value={open}>
			<OpenDispatchContext.Provider value={setOpen}>
				{children}
			</OpenDispatchContext.Provider>
		</OpenStateContext.Provider>
	);
};

export function useOpenState() {
	const context = useContext(OpenStateContext);
	return context;
}

export function useOpenDispatch() {
	const context = useContext(OpenDispatchContext);
	return context;
}

/* project context */
export type ProjectObj = {
	'projectID': number;
	'createAt': Date;
	'modifiedAt': Date;
	'isPrivate': boolean;
	'bookMark': boolean;
	'bgColor': string;
	'name': string;
	'users' : Array<UserObj>;
	'List': Array<ListObj>;
}

type ListObj = {
	'listID': number;
	'projectID': number;
	'index': number;
	'createAt': Date;
	'modifiedAt': Date;
	'name': string;
	'tasks': Array<TaskObj>;
}

type TaskObj = {
	'taskID': number;
	'listID': number;
	'index': number;
	'createAt': Date;
	'modifiedAt': Date;
	'attribute': Array<Attribute>
}

type UserObj = {
	'userID': number;
	'authLVL': number;
}

type Attribute = {
	'key': string;
	'value': string;
}

export const ProjectDataContext = createContext<Array<ProjectObj> | undefined>(undefined);
export const ProjectDispatchContext = createContext<Dispatch<Array<ProjectObj>> | undefined>(undefined);

export const ProjectContextProvider = ({ children } : childrenObj) => {
	const [project, setProject] = useState<Array<ProjectObj>>([{
		'projectID': 1,
		'createAt': new Date('2021/01/02'),
		'modifiedAt': new Date('2021/01/02'),
		'isPrivate': false,
		'bookMark': true,
		'bgColor': 'pink',
		'name': 'KOS',
		'users': [{
			'userID': 1,
			'authLVL': 0
		}],
		'List': [{
			'listID': 1,
			'projectID': 1,
			'index': 0,
			'createAt': new Date('2021/01/02'),
			'modifiedAt': new Date('2021/01/02'),
			'name': 'ToDo',
			'tasks': [{
				'taskID': 1,
				'listID': 1,
				'index': 0,
				'createAt': new Date('2021/01/02'),
				'modifiedAt': new Date('2021/01/02'),
				'attribute': [{
					'key': 'text-field',
					'value': 'hi'
				}]
			}]
		}]
	}, {
		'projectID': 2,
		'createAt': new Date('2021/01/02'),
		'modifiedAt': new Date('2021/01/02'),
		'isPrivate': true,
		'bookMark': false,
		'bgColor': 'green',
		'name': 'NERAsadddfadasfdafdsasdfasdfasdfasdf',
		'users': [{
			'userID': 1,
			'authLVL': 0
		}],
		'List': [{
			'listID': 2,
			'projectID': 2,
			'index': 0,
			'createAt': new Date('2021/01/02'),
			'modifiedAt': new Date('2021/01/02'),
			'name': 'ToDo',
			'tasks': [{
				'taskID': 2,
				'listID': 2,
				'index': 0,
				'createAt': new Date('2021/01/02'),
				'modifiedAt': new Date('2021/01/02'),
				'attribute': [{
					'key': 'text-field',
					'value': 'hi'
				}]
			}]
		}]
	}, {
		'projectID': 3,
		'createAt': new Date('2021/01/07'),
		'modifiedAt': new Date('2021/01/07'),
		'isPrivate': true,
		'bookMark': true,
		'bgColor': 'mint',
		'name': '프로젝트이름이 길면 어떻게 될까요?',
		'users': [{
			'userID': 1,
			'authLVL': 0
		}],
		'List': [{
			'listID': 3,
			'projectID': 3,
			'index': 0,
			'createAt': new Date('2021/01/07'),
			'modifiedAt': new Date('2021/01/07'),
			'name': 'ToDo',
			'tasks': [{
				'taskID': 3,
				'listID': 3,
				'index': 0,
				'createAt': new Date('2021/01/07'),
				'modifiedAt': new Date('2021/01/07'),
				'attribute': [{
					'key': 'text-field',
					'value': 'hi'
				}]
			}]
		}]
	}, {
		'projectID': 4,
		'createAt': new Date('2021/01/07'),
		'modifiedAt': new Date('2021/01/07'),
		'isPrivate': false,
		'bookMark': true,
		'bgColor': 'purple',
		'name': '여러 프로젝트 생성',
		'users': [{
			'userID': 1,
			'authLVL': 0
		}],
		'List': [{
			'listID': 4,
			'projectID': 4,
			'index': 0,
			'createAt': new Date('2021/01/07'),
			'modifiedAt': new Date('2021/01/07'),
			'name': 'ToDo',
			'tasks': [{
				'taskID': 4,
				'listID': 4,
				'index': 0,
				'createAt': new Date('2021/01/07'),
				'modifiedAt': new Date('2021/01/07'),
				'attribute': [{
					'key': 'text-field',
					'value': 'hi'
				}]
			}]
		}]
	}, {
		'projectID': 5,
		'createAt': new Date('2021/01/07'),
		'modifiedAt': new Date('2021/01/07'),
		'isPrivate': false,
		'bookMark': true,
		'bgColor': 'white',
		'name': 'ㅎㅎㅎㅎㅎㅎ',
		'users': [{
			'userID': 1,
			'authLVL': 0
		}],
		'List': [{
			'listID': 5,
			'projectID': 5,
			'index': 0,
			'createAt': new Date('2021/01/07'),
			'modifiedAt': new Date('2021/01/07'),
			'name': 'ToDo',
			'tasks': [{
				'taskID': 5,
				'listID': 5,
				'index': 0,
				'createAt': new Date('2021/01/07'),
				'modifiedAt': new Date('2021/01/07'),
				'attribute': [{
					'key': 'text-field',
					'value': 'hi'
				}]
			}]
		}]
	}]);

	return (
		<ProjectDataContext.Provider value={project}>
			<ProjectDispatchContext.Provider value={setProject}>
				{children}
			</ProjectDispatchContext.Provider>
		</ProjectDataContext.Provider>
	);
};

export function useProjectState() {
	const context = useContext(ProjectDataContext);
	return context;
}

export function useProjectDispatch() {
	const context = useContext(ProjectDispatchContext);
	return context;
}

/* projectID context */

export const PIDContext = createContext<number>(0);
export const PIDispatchContext = createContext<Dispatch<number> | undefined>(undefined);

export const PIDContextProvider = ({ children } : childrenObj) => {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<OpenStateContext.Provider value={open}>
			<OpenDispatchContext.Provider value={setOpen}>
				{children}
			</OpenDispatchContext.Provider>
		</OpenStateContext.Provider>
	);
};
