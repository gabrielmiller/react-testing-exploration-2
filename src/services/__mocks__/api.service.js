export const mockPost = jest.fn();

const mock = jest.fn().mockImplementation(() => {
    return { post: mockPost };
});

export default mock;