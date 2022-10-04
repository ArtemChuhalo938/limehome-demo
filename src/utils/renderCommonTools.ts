import { DisplayEnum } from '../@types/DisplayEnum';

const getTabBarVisibility = (
  stackName: string,
  navigation: any
): DisplayEnum => {
  let display = DisplayEnum.Flex;
  const navigationState = navigation.getState();
  const currentStack = navigationState.routes.find(
    (stack: any) => stack.name === stackName
  );
  let currentPage = null;
  if (currentStack.state) {
    currentPage = currentStack.state.routes[currentStack.state.index];
  }
  switch (stackName) {
    case 'SearchStack': {
      break;
    }
    case 'MapStack':
      if (currentPage) {
        const result = ['PropertyScreen'].includes(currentPage.name);
        display = result ? DisplayEnum.None : DisplayEnum.Flex;
      }
      break;
    case 'SavedStack':
      break;
    case 'ProfileStack':
      break;
    default:
      break;
  }
  return display;
};

export { getTabBarVisibility };
