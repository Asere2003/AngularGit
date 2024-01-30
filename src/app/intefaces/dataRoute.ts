interface RouteData {
  icon: string;
  title: string;
  description: string;
}

interface RouterDatas {
  path: string;
  component: any; // Puedes reemplazar 'any' con el tipo correcto de tu componente
  children?: RouterDatas[];
  loadComponent?: () => Promise<any>; // Puedes reemplazar 'any' con el tipo correcto de tu componente
  data?: RouteData;
}
