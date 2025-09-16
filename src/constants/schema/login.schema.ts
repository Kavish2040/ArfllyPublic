const loginProps = {
    username: {
        type: 'string',
    },
    password: {
        type: 'string',
    },
};

export const loginSchema = {
    type: 'object',
    properties: loginProps,
    required: ['username', 'password'],
};
