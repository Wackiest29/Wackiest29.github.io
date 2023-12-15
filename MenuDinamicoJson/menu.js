async function fetchMenuData() {
    try {
      const response = await fetch('menuData.json');
      if (!response.ok) {
        throw new Error('Error al cargar los datos del menú');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  
  function createMenu(menuData, menuContainer) {
    menuData.forEach(item => {
      const menuItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = item.label;
      link.href = item.url;
      menuItem.appendChild(link);
      menuContainer.appendChild(menuItem);
    });
  }
  
  async function setupMenu() {
    const menuContainer = document.getElementById('menu');
    const menuData = await fetchMenuData();
    createMenu(menuData, menuContainer);

    // Limpia cualquier contenido existente en el menú
  menuContainer.innerHTML = '';

  // Crea el menú solo una vez
  createMenu(menuData, menuContainer);

  }
  
  setupMenu();
  