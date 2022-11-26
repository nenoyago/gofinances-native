import { GoFinancesRoutesList } from '../App.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends GoFinancesRoutesList {}
  }
}
