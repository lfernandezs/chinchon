// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUsePresenter = (hook: any, presenter: any) => {
	jest.spyOn(hook, 'default');
	hook.default.mockImplementation(() => presenter);
	return presenter;
};

export default mockUsePresenter;
