const initState = {
    projects: [
        { id: '1', title: 'help me please', content: 'Im under the ground' },
        { id: '2', title: 'get me please', content: 'Im down on floor' },
        { id: '3', title: 'push me please', content: 'Im edge of the world' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('project created error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;