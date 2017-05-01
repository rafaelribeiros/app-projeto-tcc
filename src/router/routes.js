import { createRouter } from '@expo/ex-navigation';
import HomeScreen from '../modules/home/components/HomeScreen';

export const Router = createRouter(() => ({
  home: () => HomeScreen
}), { ignoreSerializableWarnings: true });
export default Router;
