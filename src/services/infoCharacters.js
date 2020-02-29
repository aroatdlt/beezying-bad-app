const breakingBadInfo = 'https://breakingbadapi.com/api/characters'

const serviceInfo = () => fetch(breakingBadInfo).then(response => response.json());

export {serviceInfo};