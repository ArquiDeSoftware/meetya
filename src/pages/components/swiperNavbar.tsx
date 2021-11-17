import React from 'react';
import Navbar from '../general/Navbar';

const navigation = {
  brand: { name: 'MeetYa', to: '/' },
  links: [
    { name: 'Matches', to: '/matches' },
    { name: 'Explorar', to: '/explorar' },
    { name: 'Mi Perfil', to: '/mi-perfil' },
  ]
};

const ServiceProviderNavbar = () => {
    const { brand, links } = navigation;

    return (
      <Navbar brand={brand} links={links} />
    );
}

export default ServiceProviderNavbar;
