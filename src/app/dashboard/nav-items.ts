export interface NavItem {
    path: string;
    title: string;
    icon?: string;
    allowedRoles: string[];
  }
  
  const links: NavItem[] = [
    {
      path: 'estudiantes',
      title: 'Alumnos',
      icon: 'person',
      allowedRoles: [],
    },
    {
      path: 'cursos',
      title: 'Cursos',
      icon: 'school',
      allowedRoles: [],
    },
    {
      path: 'inscripciones',
      title: 'Inscripciones',
      icon: 'history_edu',
      allowedRoles: [],
    },
    {
      path: 'usuarios',
      title: 'Usuarios',
      icon: 'admin_panel_settings',
      allowedRoles: ['admin'],
    },
  ]
  
  export default links;  