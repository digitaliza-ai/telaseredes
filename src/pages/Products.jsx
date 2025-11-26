import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [driveStatus, setDriveStatus] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // Configuração da integração com Google Drive
  const DRIVE_FOLDERS = {
    protecao: process.env.NEXT_PUBLIC_DRIVE_FOLDER_PROTECAO,
    mosquiteiro: process.env.NEXT_PUBLIC_DRIVE_FOLDER_MOSQUITEIRO
  };
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;

  // Função para buscar imagens do Google Drive
  const fetchDriveImages = async (folderId) => {
    try {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,webViewLink,webContentLink)`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        console.error("Erro na API do Google Drive:", data.error);
        return { error: data.error };
      }

      return { files: data.files || [] };
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      return { error: error.message };
    }
  };

  // Função para gerar URL de visualização direta
  const getDirectImageUrl = (fileId) => {
    return `https://lh3.googleusercontent.com/d/${fileId}=s500?authuser=0`;
  };

  // Carregar produtos
  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        // Buscar imagens de ambas as categorias
        const [protecaoResult, mosquiteiroResult] = await Promise.all([
          fetchDriveImages(DRIVE_FOLDERS.protecao),
          fetchDriveImages(DRIVE_FOLDERS.mosquiteiro),
        ]);

        // Verificar erros
        if (protecaoResult.error || mosquiteiroResult.error) {
          const errorMsg = protecaoResult.error || mosquiteiroResult.error;
          console.error("Erro ao carregar imagens:", errorMsg);

          setDriveStatus({
            type: 'error',
            message: 'Erro na conexão com Google Drive',
            details: errorMsg
          });

          setIsLoading(false);
          return;
        }

        // Formatando os dados dos produtos
        const produtosProtecao = protecaoResult.files.map((image) => ({
          id: image.id,
          name: image.name.split(".")[0],
          imageUrl: getDirectImageUrl(image.id),
          category: "protecao",
        }));

        const produtosMosquiteiro = mosquiteiroResult.files.map((image) => ({
          id: image.id,
          name: image.name.split(".")[0],
          imageUrl: getDirectImageUrl(image.id),
          category: "mosquiteiro",
        }));

        // Combinar todos os produtos
        const allProducts = [...produtosProtecao, ...produtosMosquiteiro];

        // Mostrar status de sucesso
        setDriveStatus({
          type: 'success',
          message: 'Conexão com Google Drive bem-sucedida',
          details: `Carregadas ${allProducts.length} imagens (${produtosProtecao.length} de proteção, ${produtosMosquiteiro.length} de mosquiteiro)`
        });

        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);

        setDriveStatus({
          type: 'error',
          message: 'Erro inesperado',
          details: error.message
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadAllProducts();
  }, []);

  // Filtrar produtos
  const handleFilter = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === filter);
      setFilteredProducts(filtered);
    }
  };

  // Abrir lightbox
  const openLightbox = (imageUrl, title) => {
    setLightboxImage(imageUrl);
    setLightboxTitle(title);
    document.body.style.overflow = 'hidden';
  };

  // Fechar lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
    document.body.style.overflow = 'auto';
  };

  // Fechar lightbox com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Tradução de categorias
  const getCategoryName = (category) => {
    const categories = {
      'protecao': 'Proteção',
      'mosquiteiro': 'Mosquiteiro'
    };
    return categories[category] || category;
  };

  return (
    <>
      {/* Nova Seção de Produtos */}
      <section className="products section-padding" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nossos Produtos</span>
            <h2 className="section-title">Conheça Nossas Soluções</h2>
          </div>

          <div className="products-filter">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilter('all')}
            >
              Todos
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'protecao' ? 'active' : ''}`}
              onClick={() => handleFilter('protecao')}
            >
              Redes de Proteção
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'mosquiteiro' ? 'active' : ''}`}
              onClick={() => handleFilter('mosquiteiro')}
            >
              Redes Mosquiteiro
            </button>
          </div>

          <div className="products-grid" id="products-container">
            {isLoading ? (
              <div className="loading">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Conectando ao Google Drive...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="loading">
                <i className="fas fa-exclamation-circle"></i>
                <p>Nenhum produto encontrado. Verifique a configuração.</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="product-card" 
                  data-category={product.category}
                  onClick={() => openLightbox(product.imageUrl, product.name)}
                >
                  <div className="product-image">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      loading="lazy" 
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200/2a4d6e/ffffff?text=Imagem+Não+Carregada';
                      }}
                    />
                    <div 
                      className="product-image-overlay" 
                      data-category={getCategoryName(product.category)}
                    >
                      <h3 className="product-image-title">{product.name}</h3>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Modal Lightbox */}
          {lightboxImage && (
            <div 
              className="lightbox-modal active" 
              onClick={closeLightbox}
            >
              <div 
                className="lightbox-content" 
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="lightbox-close" 
                  onClick={closeLightbox}
                  aria-label="Fechar"
                >
                  <i className="fas fa-times"></i>
                </button>
                <img src={lightboxImage} alt={lightboxTitle} />
                <div className="lightbox-title">{lightboxTitle}</div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Products;
