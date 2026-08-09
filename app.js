/* ==========================================================================
     GALLERY - APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. DATASET DEFINITION & STATE
    // ==========================================================================
    
    let galleryData = [
        {
            id: 'photo-1',
            title: 'Majestic Alpine Ridges',
            category: 'camera',
            url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
            tags: ['nature', 'mountain', 'snow', 'cold', 'sky'],
            date: '2026-05-12 08:34 AM',
            dimensions: '4000 x 2667',
            camera: 'Sony α7R V | FE 24-70mm F2.8 GM II',
            size: '5.2 MB',
            isFavorite: false,
            isLocked: false,
            isRemastered: false,
            // Predefined AI target object (a hiker/climber in the snow)
            aiObject: {
                name: 'Alpine Climber',
                xRel: 0.46, // relative x coord
                yRel: 0.52, // relative y coord
                wRel: 0.08, // relative width
                hRel: 0.14, // relative height
                patchXRel: 0.35, // relative source coordinate to clone texture from
                patchYRel: 0.52
            }
        },
        {
            id: 'photo-2',
            title: 'Neo-Tokyo Cyberpunk Grid',
            category: 'downloads',
            url: 'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=800&q=80',
            tags: ['urban', 'neon', 'cyberpunk', 'night', 'lights', 'purple'],
            date: '2026-06-20 11:15 PM',
            dimensions: '3840 x 2400',
            camera: 'Fujifilm X-T5 | XF 35mm F1.4 R',
            size: '4.7 MB',
            isFavorite: true,
            isLocked: false,
            isRemastered: false,
            // Predefined AI target object (a neon sign in the upper right)
            aiObject: {
                name: 'Glowing Neon Sign',
                xRel: 0.63,
                yRel: 0.24,
                wRel: 0.14,
                hRel: 0.28,
                patchXRel: 0.42,
                patchYRel: 0.24
            }
        },
        {
            id: 'photo-3',
            title: 'Serene Ocean Solitude',
            category: 'camera',
            url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80',
            tags: ['nature', 'sea', 'sunset', 'ocean', 'peaceful', 'gold'],
            date: '2026-07-04 07:42 PM',
            dimensions: '4200 x 2800',
            camera: 'Sony α7 IV | FE 70-200mm F4 G OSS',
            size: '6.1 MB',
            isFavorite: false,
            isLocked: false,
            isRemastered: false,
            // Predefined AI target (a lone sailboat on the distant horizontal ocean band)
            aiObject: {
                name: 'Distant Sailboat',
                xRel: 0.48,
                yRel: 0.54,
                wRel: 0.08,
                hRel: 0.08,
                patchXRel: 0.38,
                patchYRel: 0.54
            }
        },
        {
            id: 'photo-4',
            title: 'Sunlight Canopy Pathway',
            category: 'camera',
            url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
            tags: ['nature', 'forest', 'green', 'trees', 'sunlight'],
            date: '2026-04-18 10:20 AM',
            dimensions: '3600 x 2400',
            camera: 'Canon EOS R5 | RF 50mm F1.2 L USM',
            size: '3.8 MB',
            isFavorite: false,
            isLocked: false,
            isRemastered: false
        },
        {
            id: 'photo-5',
            title: 'Manhattan Skyline Dawn',
            category: 'downloads',
            url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
            tags: ['urban', 'architecture', 'city', 'newyork', 'sunrise'],
            date: '2026-03-05 06:12 AM',
            dimensions: '4000 x 2500',
            camera: 'Nikon Z8 | NIKKOR Z 24-120mm F4 S',
            size: '5.9 MB',
            isFavorite: false,
            isLocked: false,
            isRemastered: false
        },
        {
            id: 'photo-6',
            title: 'Moody Portrait In Amber',
            category: 'camera',
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
            tags: ['people', 'portrait', 'lights', 'woman', 'moody'],
            date: '2026-05-30 09:50 PM',
            dimensions: '3000 x 4500',
            camera: 'Sony α7R V | FE 85mm F1.2 GM',
            size: '4.2 MB',
            isFavorite: true,
            isLocked: false,
            isRemastered: false
        },
        {
            id: 'photo-7',
            title: 'Cyberpunk Alley Reflections',
            category: 'downloads',
            url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
            tags: ['urban', 'neon', 'cyberpunk', 'rain', 'puddle'],
            date: '2026-02-14 02:40 AM',
            dimensions: '3840 x 2560',
            camera: 'Leica Q3 | Summilux 28mm f/1.7 ASPH',
            size: '6.4 MB',
            isFavorite: false,
            isLocked: false,
            isRemastered: false
        },
        {
            id: 'photo-8',
            title: 'Modern Editor Theme IDE',
            category: 'screenshots',
            url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
            tags: ['tech', 'workspace', 'coding', 'editor', 'developer'],
            date: '2026-01-22 03:00 PM',
            dimensions: '1920 x 1080',
            camera: 'System Screenshot | Display Output',
            size: '1.2 MB',
            isFavorite: false,
            isLocked: false,
            isRemastered: false
        },
        {
            id: 'photo-9',
            title: 'Saxophone Shadows',
            category: 'camera',
            url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
            tags: ['people', 'music', 'saxophone', 'shadows', 'jazz'],
            date: '2026-06-11 10:14 PM',
            dimensions: '3200 x 2400',
            camera: 'Canon EOS R6 Mark II | RF 85mm F2 Macro',
            size: '3.4 MB',
            isFavorite: false,
            isLocked: false,
            isRemastered: false
        }
    ];

    // Core State Variables
    let currentFilter = 'all';
    let currentTag = 'all';
    let searchQuery = '';
    let isVaultUnlocked = false;
    let activeImageIndex = 0;
    
    // Lightbox & Modal references
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxDetailsPanel = document.getElementById('lightbox-details-panel');
    const lightboxDetailsBody = document.getElementById('lightbox-details-body');
    
    // Vault State variables
    let pinEntered = '';
    const CORRECT_PIN = '1234';

    // ==========================================================================
    // 2. RENDERING SYSTEM
    // ==========================================================================
    
    function renderGallery() {
        const grid = document.getElementById('gallery-grid');
        const emptyState = document.getElementById('empty-state');
        grid.innerHTML = '';

        // Filter images based on sidebar category, quick tag, and search query
        let filtered = galleryData.filter(img => {
            // Category check
            if (currentFilter === 'secure') {
                if (!img.isLocked) return false;
            } else {
                if (img.isLocked) return false; // Hide locked files from standard library
                if (currentFilter !== 'all' && img.category !== currentFilter) return false;
            }

            // Quick tag check
            if (currentTag !== 'all') {
                if (currentTag === 'remastered') {
                    if (!img.isRemastered) return false;
                } else if (!img.tags.includes(currentTag)) return false;
            }

            // Search query check (title, tags, camera, category)
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase();
                const titleMatch = img.title.toLowerCase().includes(query);
                const tagMatch = img.tags.some(tag => tag.toLowerCase().includes(query));
                const cameraMatch = img.camera.toLowerCase().includes(query);
                const catMatch = img.category.toLowerCase().includes(query);
                if (!titleMatch && !tagMatch && !cameraMatch && !catMatch) return false;
            }

            return true;
        });

        // Show/Hide empty state
        if (filtered.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }

        // Generate card nodes
        filtered.forEach((img, idx) => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.dataset.id = img.id;
            
            // Build inner HTML with action indicators
            card.innerHTML = `
                <img src="${img.url}" alt="${img.title}" loading="lazy">
                <div class="card-overlay">
                    <div class="card-top-actions">
                        <div class="card-badges">
                            ${img.isRemastered ? '<span class="badge-remastered"><i class="fa-solid fa-sparkles"></i> AI Remastered</span>' : ''}
                            ${img.isLocked ? '<span class="badge-locked"><i class="fa-solid fa-lock"></i> Locked</span>' : ''}
                        </div>
                        <div class="card-actions-group">
                            <button class="card-action-icon edit-btn" data-id="${img.id}" title="Edit Photo">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="card-action-icon share-btn" data-id="${img.id}" title="Share Photo">
                                <i class="fa-solid fa-share-nodes"></i>
                            </button>
                            <button class="favorite-btn ${img.isFavorite ? 'active' : ''}" data-id="${img.id}" aria-label="Add to favorites">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-info">
                        <h3 class="card-title">${img.title}</h3>
                        <span class="card-meta-text">${img.camera.split('|')[0]} • ${img.size}</span>
                    </div>
                </div>
            `;

            // Card click behavior (opens Lightbox)
            card.addEventListener('click', (e) => {
                // Ignore if clicked on action overlay buttons
                if (e.target.closest('.favorite-btn') || e.target.closest('.card-action-icon')) return;
                
                // Find actual index in filtered list
                const actualIndex = filtered.findIndex(item => item.id === img.id);
                openLightbox(filtered, actualIndex);
            });

            grid.appendChild(card);
        });

        // Update counters in sidebar & count labels
        document.getElementById('gallery-showing-count').textContent = filtered.length;
        updateLibraryCounters();
    }

    function updateLibraryCounters() {
        const allCount = galleryData.filter(img => !img.isLocked).length;
        const cameraCount = galleryData.filter(img => !img.isLocked && img.category === 'camera').length;
        const downloadsCount = galleryData.filter(img => !img.isLocked && img.category === 'downloads').length;
        const screenshotsCount = galleryData.filter(img => !img.isLocked && img.category === 'screenshots').length;
        const secureCount = galleryData.filter(img => img.isLocked).length;

        document.getElementById('count-all').textContent = allCount;
        document.getElementById('count-camera').textContent = cameraCount;
        document.getElementById('count-downloads').textContent = downloadsCount;
        document.getElementById('count-screenshots').textContent = screenshotsCount;
        
        const secureLabel = document.getElementById('count-secure');
        if (isVaultUnlocked) {
            secureLabel.innerHTML = secureCount;
            secureLabel.classList.remove('locked-style');
        } else {
            secureLabel.innerHTML = '<i class="fa-solid fa-lock"></i>';
            secureLabel.classList.add('locked-style');
        }
    }

    // ==========================================================================
    // 3. EVENT HANDLERS (SIDEBAR NAVIGATION & SEARCH & IMPORT)
    // ==========================================================================
    
    // Sidebar Filter Nav Links
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const filterValue = item.dataset.filter;

            // Secure Folder auth check
            if (filterValue === 'secure' && !isVaultUnlocked) {
                openSecureFolderLocker();
                return;
            }

            // Normal Navigation
            document.querySelectorAll('.sidebar-nav .nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            currentFilter = filterValue;
            
            // Update breadcrumbs
            const filterText = item.querySelector('span').textContent;
            document.getElementById('breadcrumb-current').textContent = filterText;

            renderGallery();
        });
    });

    // Tag pills click handlers
    document.querySelectorAll('.quick-tags .tag-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.quick-tags .tag-pill').forEach(tp => tp.classList.remove('active'));
            pill.classList.add('active');
            currentTag = pill.dataset.tag;
            renderGallery();
        });
    });

    // Instant query search input keyup
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim() !== '') {
            clearSearchBtn.style.display = 'block';
        } else {
            clearSearchBtn.style.display = 'none';
        }
        renderGallery();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderGallery();
    });

    // Import Local Image Button
    const uploadBtn = document.getElementById('upload-image-btn');
    const imageLoader = document.getElementById('image-file-loader');

    uploadBtn.addEventListener('click', () => {
        imageLoader.click();
    });

    imageLoader.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            const newPhoto = {
                id: 'custom-' + Date.now(),
                title: file.name.split('.')[0] || 'Imported Shot',
                category: currentFilter === 'secure' ? 'camera' : (currentFilter === 'all' ? 'camera' : currentFilter),
                url: event.target.result,
                tags: ['imported', 'downloads'],
                date: new Date().toLocaleString(),
                dimensions: 'Canvas Sized',
                camera: 'Imported File Source',
                size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
                isFavorite: false,
                isLocked: currentFilter === 'secure' ? true : false,
                isRemastered: false
            };

            galleryData.unshift(newPhoto);
            renderGallery();
            
            // Show dynamic Toast
            showNotification(`Imported "${newPhoto.title}" successfully.`);
        };
        reader.readAsDataURL(file);
    });

    // Favorite, Edit and Share Button triggers within card
    document.getElementById('gallery-grid').addEventListener('click', (e) => {
        const favBtn = e.target.closest('.favorite-btn');
        const editBtn = e.target.closest('.card-action-icon.edit-btn');
        const shareBtn = e.target.closest('.card-action-icon.share-btn');
        
        if (favBtn) {
            const photoId = favBtn.dataset.id;
            const photo = galleryData.find(p => p.id === photoId);
            if (photo) {
                photo.isFavorite = !photo.isFavorite;
                favBtn.classList.toggle('active');
                showNotification(photo.isFavorite ? 'Added to favorites.' : 'Removed from favorites.');
            }
            return;
        }

        if (editBtn) {
            const photoId = editBtn.dataset.id;
            const photo = galleryData.find(p => p.id === photoId);
            if (photo) {
                openEditorWorkspace(photo);
            }
            return;
        }

        if (shareBtn) {
            const photoId = shareBtn.dataset.id;
            const photo = galleryData.find(p => p.id === photoId);
            if (photo) {
                openShareModal(photo);
            }
            return;
        }
    });

    // Theme Toggle (Dark / Light)
    const themeCheckbox = document.getElementById('theme-checkbox');
    themeCheckbox.addEventListener('change', (e) => {
        const html = document.documentElement;
        if (e.target.checked) {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
        }
    });

    // Mobile Sidebar controls
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const mobileSidebarCloseBtn = document.getElementById('mobile-sidebar-close');
    const sidebar = document.getElementById('sidebar');

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    mobileSidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // ==========================================================================
    // 4. LIGHTBOX SYSTEM & NAVIGATION
    // ==========================================================================
    
    let activeLightboxList = [];
    
    function openLightbox(list, index) {
        activeLightboxList = list;
        activeImageIndex = index;
        updateLightboxContent();
        lightboxModal.classList.remove('hidden');
    }

    function updateLightboxContent() {
        if (activeLightboxList.length === 0) return;
        const image = activeLightboxList[activeImageIndex];
        
        // Render Image
        lightboxImg.style.opacity = 0;
        setTimeout(() => {
            lightboxImg.src = image.url;
            lightboxImg.style.opacity = 1;
        }, 150);

        // Update actions panels
        const secureBtnSpan = document.querySelector('#lb-secure-btn span');
        const secureBtnIcon = document.querySelector('#lb-secure-btn i');
        if (image.isLocked) {
            secureBtnSpan.textContent = 'Unlock Photo';
            secureBtnIcon.className = 'fa-solid fa-lock-open';
        } else {
            secureBtnSpan.textContent = 'Secure Lock';
            secureBtnIcon.className = 'fa-solid fa-lock';
        }

        // Load details text
        updateDetailsPanel(image);
    }

    function updateDetailsPanel(image) {
        lightboxDetailsBody.innerHTML = `
            <div class="meta-group">
                <label>Title</label>
                <span>${image.title}</span>
            </div>
            <div class="meta-group">
                <label>Album Location</label>
                <span>${image.category.toUpperCase()}</span>
            </div>
            <div class="meta-group">
                <label>Capture Timestamp</label>
                <span>${image.date}</span>
            </div>
            <div class="meta-group">
                <label>Resolution</label>
                <span>${image.dimensions}</span>
            </div>
            <div class="meta-group">
                <label>Optic Hardware</label>
                <span>${image.camera}</span>
            </div>
            <div class="meta-group">
                <label>File Weight</label>
                <span>${image.size}</span>
            </div>
            <div class="meta-group">
                <label>Photo Tags</label>
                <span>${image.tags.join(', ')}</span>
            </div>
            <div class="meta-group">
                <label>System Flags</label>
                <span>Remastered: ${image.isRemastered ? 'Yes' : 'No'} | Favorited: ${image.isFavorite ? 'Yes' : 'No'}</span>
            </div>
        `;
    }

    // Lightbox Controls
    lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.add('hidden');
        lightboxDetailsPanel.classList.add('hidden');
    });

    lightboxPrev.addEventListener('click', () => {
        if (activeImageIndex > 0) {
            activeImageIndex--;
            updateLightboxContent();
        } else {
            activeImageIndex = activeLightboxList.length - 1;
            updateLightboxContent();
        }
    });

    lightboxNext.addEventListener('click', () => {
        if (activeImageIndex < activeLightboxList.length - 1) {
            activeImageIndex++;
            updateLightboxContent();
        } else {
            activeImageIndex = 0;
            updateLightboxContent();
        }
    });

    // Keyboard Arrow Listeners
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') lightboxPrev.click();
            if (e.key === 'ArrowRight') lightboxNext.click();
            if (e.key === 'Escape') lightboxClose.click();
        }
    });

    // Info Details slide-toggle
    const infoToggleBtn = document.getElementById('lb-info-btn');
    const closeDetailsBtn = document.getElementById('close-details-btn');
    
    infoToggleBtn.addEventListener('click', () => {
        lightboxDetailsPanel.classList.toggle('hidden');
    });

    closeDetailsBtn.addEventListener('click', () => {
        lightboxDetailsPanel.classList.add('hidden');
    });

    // Secure Lock action button within lightbox
    const secureLockBtn = document.getElementById('lb-secure-btn');
    secureLockBtn.addEventListener('click', () => {
        const image = activeLightboxList[activeImageIndex];
        if (!image) return;

        if (image.isLocked) {
            // Unlock photo
            image.isLocked = false;
            showNotification(`"${image.title}" moved back to public library.`);
            lightboxClose.click();
            renderGallery();
        } else {
            // Lock photo
            image.isLocked = true;
            showNotification(`"${image.title}" moved to Secure Folder.`);
            lightboxClose.click();
            renderGallery();
        }
    });

    // Remaster Button trigger within lightbox
    const remasterTriggerBtn = document.getElementById('lb-remaster-btn');
    remasterTriggerBtn.addEventListener('click', () => {
        const image = activeLightboxList[activeImageIndex];
        if (!image) return;
        
        openRemasterPanel(image);
    });

    // Manual Editor Button trigger within lightbox
    const editTriggerBtn = document.getElementById('lb-edit-btn');
    editTriggerBtn.addEventListener('click', () => {
        const image = activeLightboxList[activeImageIndex];
        if (!image) return;
        
        openEditorWorkspace(image);
    });


    // ==========================================================================
    // 5. AI REMASTER SIMULATOR (SPLIT SCREEN COMPANION)
    // ==========================================================================
    
    let activeRemasterImage = null;
    const remasterModal = document.getElementById('remaster-modal');
    const remasterClose = document.getElementById('remaster-close');
    const runRemasterBtn = document.getElementById('run-remaster-btn');
    const saveRemasterBtn = document.getElementById('save-remaster-btn');
    const remasterScanner = document.getElementById('remaster-scanner');
    const remasterStatus = document.getElementById('remaster-status');
    const splitSlider = document.getElementById('split-slider-container');
    const originalSlice = document.getElementById('original-slice');
    const remasteredSlice = document.getElementById('remastered-slice');
    const sliderHandle = document.getElementById('slider-handle');

    function openRemasterPanel(image) {
        activeRemasterImage = image;
        
        // Set Image sources
        document.getElementById('remaster-img-original').src = image.url;
        document.getElementById('remaster-img-enhanced').src = image.url;
        
        // Apply blurry low-res style to the original side
        document.getElementById('remaster-img-original').style.filter = 'blur(3.5px) contrast(0.85) saturate(0.8) brightness(0.9)';
        
        // Reset slider UI states
        remasteredSlice.style.clipPath = 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';
        sliderHandle.style.left = '50%';
        
        runRemasterBtn.classList.remove('hidden');
        saveRemasterBtn.classList.add('hidden');
        remasterScanner.classList.add('hidden');
        
        if (image.isRemastered) {
            remasterStatus.textContent = 'This image was already optimized.';
            document.getElementById('remaster-img-original').style.filter = 'blur(1px) contrast(0.95)';
            saveRemasterBtn.classList.remove('hidden');
        } else {
            remasterStatus.textContent = 'AI model will boost clarity and depth.';
        }

        remasterModal.classList.remove('hidden');
    }

    runRemasterBtn.addEventListener('click', () => {
        remasterScanner.classList.remove('hidden');
        remasterStatus.textContent = 'AI Engine sweeps clarity layers...';
        runRemasterBtn.disabled = true;

        setTimeout(() => {
            // Apply sharpness, resolution boost and dynamic range upgrades
            document.getElementById('remaster-img-enhanced').style.filter = 'contrast(1.15) saturate(1.18) brightness(1.05) sharp';
            // Enhance original comparative
            document.getElementById('remaster-img-original').style.filter = 'blur(5px) contrast(0.8) saturate(0.7) brightness(0.9)';
            
            remasterScanner.classList.add('hidden');
            remasterStatus.textContent = 'Remaster complete! Drag slider to compare.';
            runRemasterBtn.disabled = false;
            runRemasterBtn.classList.add('hidden');
            saveRemasterBtn.classList.remove('hidden');

            showNotification('Image remastered successfully.');
        }, 2200);
    });

    saveRemasterBtn.addEventListener('click', () => {
        if (!activeRemasterImage) return;

        // Apply enhanced visual output to original data URL (simulation via Canvas)
        const canvas = document.createElement('canvas');
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = activeRemasterImage.url + (activeRemasterImage.url.includes('?') ? '&' : '?') + 'cors=' + Date.now();
        
        img.onload = function() {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            
            // Apply enhancement filters on final context
            ctx.filter = 'contrast(1.12) saturate(1.15) brightness(1.03)';
            ctx.drawImage(img, 0, 0);
            
            activeRemasterImage.url = canvas.toDataURL();
            activeRemasterImage.isRemastered = true;
            activeRemasterImage.size = (parseFloat(activeRemasterImage.size) * 1.1).toFixed(1) + ' MB'; // increased detail = size boost
            activeRemasterImage.dimensions = (parseInt(activeRemasterImage.dimensions.split('x')[0]) * 1.5) + ' x ' + (parseInt(activeRemasterImage.dimensions.split('x')[1]) * 1.5); // Resolution upscaled!
            
            remasterModal.classList.add('hidden');
            lightboxClose.click();
            renderGallery();
            showNotification('Saved enhanced remaster to gallery.');
        };
    });

    remasterClose.addEventListener('click', () => {
        remasterModal.classList.add('hidden');
    });

    // Slider Drag Interactivity
    let isDraggingSlider = false;

    function moveSlider(clientX) {
        const rect = splitSlider.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        let percentage = (offsetX / rect.width) * 100;
        
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        sliderHandle.style.left = `${percentage}%`;
        remasteredSlice.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
    }

    sliderHandle.addEventListener('mousedown', () => isDraggingSlider = true);
    window.addEventListener('mouseup', () => isDraggingSlider = false);
    window.addEventListener('mousemove', (e) => {
        if (!isDraggingSlider) return;
        moveSlider(e.clientX);
    });

    // Mobile touch slide support
    sliderHandle.addEventListener('touchstart', () => isDraggingSlider = true);
    window.addEventListener('touchend', () => isDraggingSlider = false);
    window.addEventListener('touchmove', (e) => {
        if (!isDraggingSlider) return;
        moveSlider(e.touches[0].clientX);
    });


    // ==========================================================================
    // 6. PHOTO ASSIST & CANVAS EDITOR IMPLEMENTATION
    // ==========================================================================
    
    let activeEditorImage = null;
    const editorModal = document.getElementById('editor-modal');
    const editorClose = document.getElementById('editor-close');
    const editorCanvas = document.getElementById('editor-canvas');
    const editorCtx = editorCanvas.getContext('2d');
    
    // Canvas dimensions states
    let canvasImage = new Image();
    let originalImageSource = null; // Backup to allow undo resets
    
    // Sliders states
    let bVal = 100, cVal = 100, sVal = 100, sepiaVal = 0, blurVal = 0;
    let rotationAngle = 0; // degrees
    let activePreset = 'normal';

    // Crop UI states
    const cropOverlay = document.getElementById('crop-overlay');
    const cropBox = document.getElementById('crop-box');
    let isCroppingActive = false;
    let cropAspectRatio = 'free';

    // AI Edit Tool states
    const objectOverlay = document.getElementById('object-overlay');
    const aiToolEraser = document.getElementById('ai-tool-eraser');
    const aiToolMover = document.getElementById('ai-tool-mover');
    const runEraserBtn = document.getElementById('run-eraser-btn');
    const runMoverBtn = document.getElementById('run-mover-btn');
    let activeAiMode = 'eraser'; // or 'mover'
    let isDrawingEraserMask = false;
    let hasBrushedObject = false;

    // AI Object detector positions
    const detectBox1 = document.getElementById('detect-box-1');

    // Drawing, Text Stamp and Sticker options
    let isDrawModeActive = false;
    let selectedDrawColor = '#ef4444'; // Red default
    let selectedBrushWidth = 5;
    let isDrawingOnCanvas = false;
    let isStampingText = false;
    let textToStamp = '';
    let isStampingSticker = false;
    let selectedSticker = '';

    function openEditorWorkspace(image) {
        activeEditorImage = image;
        originalImageSource = image.url; // Backup original representation
        
        // Reset adjust inputs
        bVal = 100; cVal = 100; sVal = 100; sepiaVal = 0; blurVal = 0;
        rotationAngle = 0;
        activePreset = 'normal';
        isCroppingActive = false;
        hasBrushedObject = false;
        
        document.getElementById('slider-brightness').value = 100;
        document.getElementById('slider-contrast').value = 100;
        document.getElementById('slider-saturation').value = 100;
        document.getElementById('slider-sepia').value = 0;
        document.getElementById('slider-blur').value = 0;

        document.getElementById('val-brightness').textContent = '100%';
        document.getElementById('val-contrast').textContent = '100%';
        document.getElementById('val-saturation').textContent = '100%';
        document.getElementById('val-sepia').textContent = '0%';
        document.getElementById('val-blur').textContent = '0px';

        document.querySelectorAll('.filter-preset-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-preset="normal"]').classList.add('active');

        // Select Adjust tab by default
        document.querySelectorAll('.editor-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-editor-tab="adjust"]').classList.add('active');
        
        cropOverlay.classList.add('hidden');
        objectOverlay.classList.add('hidden');
        detectBox1.style.display = 'none';
        runEraserBtn.disabled = true;

        // Reset Draw controls
        deactivateDrawMode();
        document.getElementById('draw-text-input').value = '';
        document.getElementById('slider-draw-brush-width').value = 5;
        document.getElementById('val-draw-brush-width').textContent = '5px';
        document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        document.querySelector('.color-dot.red').classList.add('active');
        selectedDrawColor = '#ef4444';
        selectedBrushWidth = 5;

        // Load Canvas
        canvasImage = new Image();
        canvasImage.crossOrigin = "anonymous";
        canvasImage.src = image.url + (image.url.includes('?') ? '&' : '?') + 'cors=' + Date.now();
        canvasImage.onload = function() {
            initCanvas();
            editorModal.classList.remove('hidden');
            document.getElementById('editor-status').textContent = 'Loaded image in Workshop canvas.';
        };
    }

    function initCanvas() {
        // Set canvas physical resolutions matching source image
        editorCanvas.width = canvasImage.naturalWidth;
        editorCanvas.height = canvasImage.naturalHeight;
        
        // Draw image onto canvas
        redrawCanvas();
    }

    function redrawCanvas() {
        editorCtx.clearRect(0, 0, editorCanvas.width, editorCanvas.height);
        editorCtx.save();
        
        // Translate and Rotate if needed
        if (rotationAngle !== 0) {
            editorCtx.translate(editorCanvas.width / 2, editorCanvas.height / 2);
            editorCtx.rotate((rotationAngle * Math.PI) / 180);
            editorCtx.translate(-editorCanvas.width / 2, -editorCanvas.height / 2);
        }

        // Apply visual settings filters
        let filterStr = `brightness(${bVal}%) contrast(${cVal}%) saturate(${sVal}%) sepia(${sepiaVal}%) blur(${blurVal}px)`;
        
        // Apply presets filters layers
        if (activePreset === 'grayscale') filterStr += ' grayscale(100%)';
        if (activePreset === 'cyberpunk') filterStr += ' saturate(170%) hue-rotate(25deg) contrast(110%)';
        if (activePreset === 'vintage') filterStr += ' sepia(45%) contrast(90%) brightness(95%)';
        if (activePreset === 'cold') filterStr += ' hue-rotate(-20deg) saturate(115%) brightness(102%)';
        
        editorCtx.filter = filterStr;
        editorCtx.drawImage(canvasImage, 0, 0, editorCanvas.width, editorCanvas.height);
        editorCtx.restore();
    }

    // Adjust Sliders listeners
    function updateAdjustmentValues() {
        bVal = document.getElementById('slider-brightness').value;
        cVal = document.getElementById('slider-contrast').value;
        sVal = document.getElementById('slider-saturation').value;
        sepiaVal = document.getElementById('slider-sepia').value;
        blurVal = document.getElementById('slider-blur').value;

        document.getElementById('val-brightness').textContent = bVal + '%';
        document.getElementById('val-contrast').textContent = cVal + '%';
        document.getElementById('val-saturation').textContent = sVal + '%';
        document.getElementById('val-sepia').textContent = sepiaVal + '%';
        document.getElementById('val-blur').textContent = blurVal + 'px';

        redrawCanvas();
    }

    document.querySelectorAll('.control-slider').forEach(slider => {
        slider.addEventListener('input', updateAdjustmentValues);
    });

    // Preset buttons clicks
    document.querySelectorAll('.filter-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activePreset = btn.dataset.preset;
            redrawCanvas();
        });
    });

    // Tabs clicks
    document.querySelectorAll('.editor-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.editor-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const panelId = 'editor-panel-' + btn.dataset.editorTab;
            document.querySelectorAll('.editor-tab-panel').forEach(p => p.classList.remove('active'));
            document.getElementById(panelId).classList.add('active');
            
            // Activate overlay overlays based on active mode
            if (btn.dataset.editorTab === 'crop-tab') {
                activateCroppingUI(true);
                activateAiOverlay(false);
                deactivateDrawMode();
            } else if (btn.dataset.editorTab === 'ai-tab') {
                activateCroppingUI(false);
                activateAiOverlay(true);
                deactivateDrawMode();
            } else {
                activateCroppingUI(false);
                activateAiOverlay(false);
                if (btn.dataset.editorTab !== 'draw-tab') {
                    deactivateDrawMode();
                }
            }
        });
    });

    function deactivateDrawMode() {
        isDrawModeActive = false;
        const toggleBtn = document.getElementById('draw-mode-toggle-btn');
        if (toggleBtn) {
            toggleBtn.classList.remove('active');
            toggleBtn.innerHTML = '<i class="fa-solid fa-paint-brush"></i> <span>Draw Mode: OFF</span>';
        }
        
        isStampingText = false;
        const textBtn = document.getElementById('draw-add-text-btn');
        if (textBtn) {
            textBtn.classList.remove('active');
            textBtn.innerHTML = '<i class="fa-solid fa-font"></i> Click Canvas to Stamp Text';
        }

        isStampingSticker = false;
        document.querySelectorAll('.emoji-sticker-btn').forEach(btn => btn.classList.remove('active'));
        selectedSticker = '';
    }

    // Transformation Rotate
    document.getElementById('rotate-left-btn').addEventListener('click', () => {
        rotationAngle = (rotationAngle - 90) % 360;
        redrawCanvas();
    });
    document.getElementById('rotate-right-btn').addEventListener('click', () => {
        rotationAngle = (rotationAngle + 90) % 360;
        redrawCanvas();
    });

    // ==========================================================================
    // 6A. MANUAL CROP IMPLEMENTATION
    // ==========================================================================
    
    function activateCroppingUI(active) {
        isCroppingActive = active;
        if (active) {
            cropOverlay.classList.remove('hidden');
            
            // Fit crop overlay matching canvas bounding rect dimensions
            const canvasRect = editorCanvas.getBoundingClientRect();
            const wrapperRect = document.getElementById('canvas-wrapper').getBoundingClientRect();
            
            cropOverlay.style.left = `${canvasRect.left - wrapperRect.left}px`;
            cropOverlay.style.top = `${canvasRect.top - wrapperRect.top}px`;
            cropOverlay.style.width = `${canvasRect.width}px`;
            cropOverlay.style.height = `${canvasRect.height}px`;
            
            // Set crop box default boundary (centered, 80% size)
            cropBox.style.left = '10%';
            cropBox.style.top = '10%';
            cropBox.style.width = '80%';
            cropBox.style.height = '80%';
            
            document.getElementById('editor-status').textContent = 'Adjust Crop Box bounds on canvas.';
        } else {
            cropOverlay.classList.add('hidden');
        }
    }

    // Handles ratio clicks
    document.querySelectorAll('.crop-ratios-grid .ratio-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.crop-ratios-grid .ratio-btn').forEach(r => r.classList.remove('active'));
            btn.classList.add('active');
            cropAspectRatio = btn.dataset.ratio;
            applyRatioLimit();
        });
    });

    function applyRatioLimit() {
        if (cropAspectRatio === 'free') return;
        
        let ratioVal = 1;
        if (cropAspectRatio === '1-1') ratioVal = 1;
        if (cropAspectRatio === '4-3') ratioVal = 4/3;
        if (cropAspectRatio === '16-9') ratioVal = 16/9;
        
        const w = parseFloat(cropBox.style.width);
        const h = w / ratioVal;
        
        cropBox.style.height = `${h}%`;
    }

    // Handles dragging crop bounds
    let isDraggingCrop = false;
    let isResizingCrop = false;
    let activeHandle = null;
    let startX = 0, startY = 0;
    let startLeft = 0, startTop = 0, startWidth = 0, startHeight = 0;

    cropBox.addEventListener('mousedown', (e) => {
        const handle = e.target.closest('.crop-handle');
        if (handle) {
            isResizingCrop = true;
            activeHandle = handle.dataset.handle;
        } else {
            isDraggingCrop = true;
        }
        
        startX = e.clientX;
        startY = e.clientY;
        
        const overlayRect = cropOverlay.getBoundingClientRect();
        const boxRect = cropBox.getBoundingClientRect();
        
        startLeft = ((boxRect.left - overlayRect.left) / overlayRect.width) * 100;
        startTop = ((boxRect.top - overlayRect.top) / overlayRect.height) * 100;
        startWidth = (boxRect.width / overlayRect.width) * 100;
        startHeight = (boxRect.height / overlayRect.height) * 100;
        
        e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isCroppingActive) return;
        if (!isDraggingCrop && !isResizingCrop) return;
        
        const overlayRect = cropOverlay.getBoundingClientRect();
        const deltaX = ((e.clientX - startX) / overlayRect.width) * 100;
        const deltaY = ((e.clientY - startY) / overlayRect.height) * 100;
        
        if (isDraggingCrop) {
            let newLeft = startLeft + deltaX;
            let newTop = startTop + deltaY;
            
            // Limit bounds inside overlay
            if (newLeft < 0) newLeft = 0;
            if (newTop < 0) newTop = 0;
            if (newLeft + startWidth > 100) newLeft = 100 - startWidth;
            if (newTop + startHeight > 100) newTop = 100 - startHeight;
            
            cropBox.style.left = `${newLeft}%`;
            cropBox.style.top = `${newTop}%`;
        } else if (isResizingCrop) {
            let newWidth = startWidth;
            let newHeight = startHeight;
            let newLeft = startLeft;
            let newTop = startTop;
            
            if (activeHandle.includes('e')) {
                newWidth = startWidth + deltaX;
            } else if (activeHandle.includes('w')) {
                newWidth = startWidth - deltaX;
                newLeft = startLeft + deltaX;
            }
            
            if (activeHandle.includes('s')) {
                newHeight = startHeight + deltaY;
            } else if (activeHandle.includes('n')) {
                newHeight = startHeight - deltaY;
                newTop = startTop + deltaY;
            }
            
            // Minimum size constraint
            if (newWidth < 10) newWidth = 10;
            if (newHeight < 10) newHeight = 10;
            
            // Keep ratio locks
            if (cropAspectRatio !== 'free') {
                let ratio = 1;
                if (cropAspectRatio === '1-1') ratio = 1;
                if (cropAspectRatio === '4-3') ratio = 4/3;
                if (cropAspectRatio === '16-9') ratio = 16/9;
                
                newHeight = newWidth / ratio;
            }
            
            // Bounds boundary limit check
            if (newLeft >= 0 && newLeft + newWidth <= 100) {
                cropBox.style.left = `${newLeft}%`;
                cropBox.style.width = `${newWidth}%`;
            }
            if (newTop >= 0 && newTop + newHeight <= 100) {
                cropBox.style.top = `${newTop}%`;
                cropBox.style.height = `${newHeight}%`;
            }
        }
    });

    window.addEventListener('mouseup', () => {
        isDraggingCrop = false;
        isResizingCrop = false;
        activeHandle = null;
    });

    // Apply Actual Canvas Crop Execution
    document.getElementById('apply-crop-btn').addEventListener('click', () => {
        const overlayRect = cropOverlay.getBoundingClientRect();
        const boxRect = cropBox.getBoundingClientRect();
        
        // Calculate percentages
        const pctLeft = (boxRect.left - overlayRect.left) / overlayRect.width;
        const pctTop = (boxRect.top - overlayRect.top) / overlayRect.height;
        const pctWidth = boxRect.width / overlayRect.width;
        const pctHeight = boxRect.height / overlayRect.height;
        
        // Map to source physical coordinates
        const cropX = pctLeft * editorCanvas.width;
        const cropY = pctTop * editorCanvas.height;
        const cropW = pctWidth * editorCanvas.width;
        const cropH = pctHeight * editorCanvas.height;
        
        // Create temp canvas to extract cropped image block data
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = cropW;
        tempCanvas.height = cropH;
        const tempCtx = tempCanvas.getContext('2d');
        
        tempCtx.drawImage(editorCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
        
        // Reload cropped URL to image object
        canvasImage = new Image();
        canvasImage.onload = function() {
            editorCanvas.width = cropW;
            editorCanvas.height = cropH;
            editorCtx.drawImage(canvasImage, 0, 0);
            
            // Turn off crop view overlays
            activateCroppingUI(false);
            
            // Return back to adjust panel tab selector active
            document.querySelector('[data-editor-tab="adjust"]').click();
            showNotification('Cropped image successfully.');
        };
        canvasImage.src = tempCanvas.toDataURL();
    });

    // ==========================================================================
    // 6B. AI PHOTO ASSIST (OBJECT ERASER & MOVER)
    // ==========================================================================
    
    const aiBrushCanvas = document.getElementById('ai-brush-canvas');
    const aiBrushCtx = aiBrushCanvas.getContext('2d');
    let isDrawingBrush = false;
    let brushBoundingBox = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };

    function activateAiOverlay(active) {
        if (active) {
            objectOverlay.classList.remove('hidden');
            
            // Size overlay matching canvas
            const canvasRect = editorCanvas.getBoundingClientRect();
            const wrapperRect = document.getElementById('canvas-wrapper').getBoundingClientRect();
            
            objectOverlay.style.left = `${canvasRect.left - wrapperRect.left}px`;
            objectOverlay.style.top = `${canvasRect.top - wrapperRect.top}px`;
            objectOverlay.style.width = `${canvasRect.width}px`;
            objectOverlay.style.height = `${canvasRect.height}px`;

            // Reset brush canvas size and clear it
            aiBrushCanvas.width = canvasRect.width;
            aiBrushCanvas.height = canvasRect.height;
            aiBrushCtx.clearRect(0, 0, aiBrushCanvas.width, aiBrushCanvas.height);

            // Check if active preloaded image has predefined AI objects
            if (activeEditorImage.aiObject) {
                const aiObj = activeEditorImage.aiObject;
                
                // Position detect box
                detectBox1.style.left = `${aiObj.xRel * 100}%`;
                detectBox1.style.top = `${aiObj.yRel * 100}%`;
                detectBox1.style.width = `${aiObj.wRel * 100}%`;
                detectBox1.style.height = `${aiObj.hRel * 100}%`;
                
                detectBox1.style.display = 'block';
                detectBox1.querySelector('.ai-detect-label').textContent = aiObj.name;
                
                // Reset border colors
                detectBox1.querySelector('.ai-glow-border').style.borderColor = '';
                detectBox1.querySelector('.ai-glow-border').style.boxShadow = '';
                
                document.getElementById('editor-status').textContent = `AI detected target object: "${aiObj.name}"`;
            } else {
                detectBox1.style.display = 'none';
                document.getElementById('editor-status').textContent = 'No preset AI targets. Draw custom brush mask.';
            }
            
            // Reset brush variables
            hasBrushedObject = false;
            runEraserBtn.disabled = true;
        } else {
            objectOverlay.classList.add('hidden');
            detectBox1.style.display = 'none';
            aiBrushCtx.clearRect(0, 0, aiBrushCanvas.width, aiBrushCanvas.height);
        }
    }

    // Mouse drawing listeners on overlay
    objectOverlay.addEventListener('mousedown', (e) => {
        if (activeAiMode !== 'eraser') return;
        if (e.target.closest('#detect-box-1')) return;

        isDrawingBrush = true;
        const rect = objectOverlay.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        aiBrushCtx.beginPath();
        aiBrushCtx.moveTo(x, y);
        aiBrushCtx.lineWidth = document.getElementById('slider-brush-size').value;
        aiBrushCtx.lineCap = 'round';
        aiBrushCtx.lineJoin = 'round';
        aiBrushCtx.strokeStyle = 'rgba(168, 85, 247, 0.45)'; // semi-transparent purple highlight
        aiBrushCtx.stroke();
        
        brushBoundingBox = { minX: x, minY: y, maxX: x, maxY: y };
    });

    objectOverlay.addEventListener('mousemove', (e) => {
        if (!isDrawingBrush || activeAiMode !== 'eraser') return;
        const rect = objectOverlay.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        aiBrushCtx.lineTo(x, y);
        aiBrushCtx.stroke();

        const radius = parseInt(document.getElementById('slider-brush-size').value) / 2;
        brushBoundingBox.minX = Math.min(brushBoundingBox.minX, x - radius);
        brushBoundingBox.minY = Math.min(brushBoundingBox.minY, y - radius);
        brushBoundingBox.maxX = Math.max(brushBoundingBox.maxX, x + radius);
        brushBoundingBox.maxY = Math.max(brushBoundingBox.maxY, y + radius);
    });

    // Touch drawing listeners for mobile
    objectOverlay.addEventListener('touchstart', (e) => {
        if (activeAiMode !== 'eraser') return;
        if (e.target.closest('#detect-box-1')) return;
        e.preventDefault();

        isDrawingBrush = true;
        const rect = objectOverlay.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        aiBrushCtx.beginPath();
        aiBrushCtx.moveTo(x, y);
        aiBrushCtx.lineWidth = document.getElementById('slider-brush-size').value;
        aiBrushCtx.lineCap = 'round';
        aiBrushCtx.lineJoin = 'round';
        aiBrushCtx.strokeStyle = 'rgba(168, 85, 247, 0.45)';
        aiBrushCtx.stroke();
        
        brushBoundingBox = { minX: x, minY: y, maxX: x, maxY: y };
    });

    objectOverlay.addEventListener('touchmove', (e) => {
        if (!isDrawingBrush || activeAiMode !== 'eraser') return;
        e.preventDefault();
        const rect = objectOverlay.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        aiBrushCtx.lineTo(x, y);
        aiBrushCtx.stroke();

        const radius = parseInt(document.getElementById('slider-brush-size').value) / 2;
        brushBoundingBox.minX = Math.min(brushBoundingBox.minX, x - radius);
        brushBoundingBox.minY = Math.min(brushBoundingBox.minY, y - radius);
        brushBoundingBox.maxX = Math.max(brushBoundingBox.maxX, x + radius);
        brushBoundingBox.maxY = Math.max(brushBoundingBox.maxY, y + radius);
    });

    const endDrawingBrush = () => {
        if (!isDrawingBrush) return;
        isDrawingBrush = false;
        
        // Validate if stroke was significant
        const width = brushBoundingBox.maxX - brushBoundingBox.minX;
        const height = brushBoundingBox.maxY - brushBoundingBox.minY;
        if (width > 4 && height > 4) {
            hasBrushedObject = true;
            runEraserBtn.disabled = false;
            document.getElementById('editor-status').textContent = 'Custom brushed region selected. Press Erase.';
        }
    };

    objectOverlay.addEventListener('mouseup', endDrawingBrush);
    objectOverlay.addEventListener('mouseleave', endDrawingBrush);
    objectOverlay.addEventListener('touchend', endDrawingBrush);

    // Handle Tool Switch (Eraser vs Mover options panel)
    document.getElementById('ai-tool-eraser').addEventListener('click', () => {
        document.getElementById('ai-tool-eraser').classList.add('active');
        document.getElementById('ai-tool-mover').classList.remove('active');
        
        document.getElementById('ai-eraser-options').classList.remove('hidden');
        document.getElementById('ai-mover-options').classList.add('hidden');
        activeAiMode = 'eraser';
        
        // Remove draggable state from detect box
        detectBox1.style.cursor = 'pointer';
        detectBox1.style.left = `${activeEditorImage.aiObject?.xRel * 100}%`;
        detectBox1.style.top = `${activeEditorImage.aiObject?.yRel * 100}%`;
    });

    document.getElementById('ai-tool-mover').addEventListener('click', () => {
        document.getElementById('ai-tool-mover').classList.add('active');
        document.getElementById('ai-tool-eraser').classList.remove('active');
        
        document.getElementById('ai-mover-options').classList.remove('hidden');
        document.getElementById('ai-eraser-options').classList.add('hidden');
        activeAiMode = 'mover';
        
        // Make detect box draggable
        detectBox1.style.cursor = 'move';
    });

    // Selecting identified target boxes
    detectBox1.addEventListener('click', (e) => {
        if (activeAiMode === 'eraser') {
            hasBrushedObject = true;
            runEraserBtn.disabled = false;
            
            // Draw visual brush overlay on top
            detectBox1.querySelector('.ai-glow-border').style.borderColor = '#a855f7';
            detectBox1.querySelector('.ai-glow-border').style.boxShadow = '0 0 20px #a855f7';
            document.getElementById('editor-status').textContent = `Target object "${activeEditorImage.aiObject.name}" highlighted. Ready to Erase.`;
            
            e.stopPropagation();
        }
    });

    // Mover Draggable handler
    let isDraggingMover = false;
    let moverStartX = 0, moverStartY = 0;
    let moverStartLeft = 0, moverStartTop = 0;

    detectBox1.addEventListener('mousedown', (e) => {
        if (activeAiMode !== 'mover') return;
        isDraggingMover = true;
        moverStartX = e.clientX;
        moverStartY = e.clientY;
        
        const overlayRect = objectOverlay.getBoundingClientRect();
        const boxRect = detectBox1.getBoundingClientRect();
        
        moverStartLeft = ((boxRect.left - overlayRect.left) / overlayRect.width) * 100;
        moverStartTop = ((boxRect.top - overlayRect.top) / overlayRect.height) * 100;
        
        e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
        if (activeAiMode !== 'mover' || !isDraggingMover) return;
        
        const overlayRect = objectOverlay.getBoundingClientRect();
        const deltaX = ((e.clientX - moverStartX) / overlayRect.width) * 100;
        const deltaY = ((e.clientY - moverStartY) / overlayRect.height) * 100;
        
        let newLeft = moverStartLeft + deltaX;
        let newTop = moverStartTop + deltaY;
        
        // Bound checks
        const boxRect = detectBox1.getBoundingClientRect();
        const boxWidthPct = (boxRect.width / overlayRect.width) * 100;
        const boxHeightPct = (boxRect.height / overlayRect.height) * 100;
        
        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft + boxWidthPct > 100) newLeft = 100 - boxWidthPct;
        if (newTop + boxHeightPct > 100) newTop = 100 - boxHeightPct;
        
        detectBox1.style.left = `${newLeft}%`;
        detectBox1.style.top = `${newTop}%`;
    });

    window.addEventListener('mouseup', () => {
        isDraggingMover = false;
    });

    // Erase simulation execution
    runEraserBtn.addEventListener('click', () => {
        if (!hasBrushedObject) return;
        
        runEraserBtn.disabled = true;
        document.getElementById('editor-status').textContent = 'AI generating matching background fill...';
        
        // Determine coordinates and selector box dimensions for animation
        let leftVal = 0, topVal = 0, widthVal = 0, heightVal = 0;
        let isPreset = false;
        let aiObj = null;

        const isGlowBorderActive = detectBox1.style.display !== 'none' && 
            (detectBox1.querySelector('.ai-glow-border').style.borderColor.includes('rgb') || 
             detectBox1.querySelector('.ai-glow-border').style.borderColor.includes('#'));

        if (activeEditorImage.aiObject && isGlowBorderActive) {
            // Preset target selected
            aiObj = activeEditorImage.aiObject;
            isPreset = true;
            leftVal = parseFloat(detectBox1.style.left);
            topVal = parseFloat(detectBox1.style.top);
            widthVal = parseFloat(detectBox1.style.width);
            heightVal = parseFloat(detectBox1.style.height);
        } else {
            // Custom brush selection
            const overlayRect = objectOverlay.getBoundingClientRect();
            leftVal = (brushBoundingBox.minX / overlayRect.width) * 100;
            topVal = (brushBoundingBox.minY / overlayRect.height) * 100;
            widthVal = ((brushBoundingBox.maxX - brushBoundingBox.minX) / overlayRect.width) * 100;
            heightVal = ((brushBoundingBox.maxY - brushBoundingBox.minY) / overlayRect.height) * 100;
        }

        // Play glowing shutter shimmer particles on selection box
        const particles = document.createElement('div');
        particles.className = 'shimmer-particles';
        particles.style.position = 'absolute';
        particles.style.left = `${leftVal}%`;
        particles.style.top = `${topVal}%`;
        particles.style.width = `${widthVal}%`;
        particles.style.height = `${heightVal}%`;
        particles.style.background = 'radial-gradient(circle, rgba(168,85,247,0.7) 0%, transparent 70%)';
        particles.style.boxShadow = '0 0 30px #a855f7';
        particles.style.borderRadius = '50%';
        particles.style.zIndex = '50';
        particles.style.animation = 'eraseParticles 0.8s ease forwards';
        
        objectOverlay.appendChild(particles);
        
        setTimeout(() => {
            // Remove particles
            particles.remove();
            
            if (isPreset && aiObj) {
                // Map relative coords to physical canvas pixels
                const x = aiObj.xRel * editorCanvas.width;
                const y = aiObj.yRel * editorCanvas.height;
                const w = aiObj.wRel * editorCanvas.width;
                const h = aiObj.hRel * editorCanvas.height;
                
                const px = aiObj.patchXRel * editorCanvas.width;
                const py = aiObj.patchYRel * editorCanvas.height;
                
                // Erase: Draw ambient background texture patch over the object coordinates
                editorCtx.drawImage(editorCanvas, px, py, w, h, x, y, w, h);
            } else {
                // Custom brush erase logic
                const x = (leftVal / 100) * editorCanvas.width;
                const y = (topVal / 100) * editorCanvas.height;
                const w = (widthVal / 100) * editorCanvas.width;
                const h = (heightVal / 100) * editorCanvas.height;
                
                // Determine a safe source patch area
                let patchX = x + w + 15;
                if (patchX + w > editorCanvas.width) {
                    patchX = x - w - 15; // Shift left if going outside
                }
                patchX = Math.max(0, Math.min(editorCanvas.width - w, patchX));

                // Draw background patch over brushed area
                editorCtx.drawImage(editorCanvas, patchX, y, w, h, x, y, w, h);
            }
            
            // Redraw update image
            canvasImage = new Image();
            canvasImage.onload = function() {
                // Remove target box UI and clear brush canvas
                detectBox1.style.display = 'none';
                aiBrushCtx.clearRect(0, 0, aiBrushCanvas.width, aiBrushCanvas.height);
                hasBrushedObject = false;
                document.getElementById('editor-status').textContent = 'Object erased successfully via Photo Assist.';
            };
            canvasImage.src = editorCanvas.toDataURL();
            
            showNotification('Object erased using AI Assist.');
        }, 800);
    });

    // Mover reposition execution
    runMoverBtn.addEventListener('click', () => {
        if (!activeEditorImage.aiObject) return;
        
        const aiObj = activeEditorImage.aiObject;
        document.getElementById('editor-status').textContent = 'Repositioning object and filling background...';
        
        // Read current detect box position relative to overlay bounds
        const overlayRect = objectOverlay.getBoundingClientRect();
        const boxRect = detectBox1.getBoundingClientRect();
        
        const finalLeftPct = (boxRect.left - overlayRect.left) / overlayRect.width;
        const finalTopPct = (boxRect.top - overlayRect.top) / overlayRect.height;
        
        // Physical coordinates
        const srcX = aiObj.xRel * editorCanvas.width;
        const srcY = aiObj.yRel * editorCanvas.height;
        const w = aiObj.wRel * editorCanvas.width;
        const h = aiObj.hRel * editorCanvas.height;
        
        const destX = finalLeftPct * editorCanvas.width;
        const destY = finalTopPct * editorCanvas.height;
        
        const patchX = aiObj.patchXRel * editorCanvas.width;
        const patchY = aiObj.patchYRel * editorCanvas.height;
        
        // 1. Capture object image data
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = w;
        tempCanvas.height = h;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(editorCanvas, srcX, srcY, w, h, 0, 0, w, h);
        
        // 2. Patch original coordinates with background
        editorCtx.drawImage(editorCanvas, patchX, patchY, w, h, srcX, srcY, w, h);
        
        // 3. Draw object at destination coordinates
        editorCtx.drawImage(tempCanvas, destX, destY, w, h);
        
        // 4. Save and reset
        canvasImage = new Image();
        canvasImage.onload = function() {
            // Update details
            aiObj.xRel = finalLeftPct;
            aiObj.yRel = finalTopPct;
            
            detectBox1.style.left = `${finalLeftPct * 100}%`;
            detectBox1.style.top = `${finalTopPct * 100}%`;
            
            document.getElementById('editor-status').textContent = 'Object relocated, gaps ambient-filled.';
            showNotification('Object moved via Photo Assist.');
        };
        canvasImage.src = editorCanvas.toDataURL();
    });

    // Undo / Reset workshop changes
    document.getElementById('editor-undo').addEventListener('click', () => {
        canvasImage = new Image();
        canvasImage.crossOrigin = "anonymous";
        canvasImage.src = originalImageSource + (originalImageSource.includes('?') ? '&' : '?') + 'cors=' + Date.now();
        canvasImage.onload = function() {
            rotationAngle = 0;
            bVal = 100; cVal = 100; sVal = 100; sepiaVal = 0; blurVal = 0;
            activePreset = 'normal';
            
            document.getElementById('slider-brightness').value = 100;
            document.getElementById('slider-contrast').value = 100;
            document.getElementById('slider-saturation').value = 100;
            document.getElementById('slider-sepia').value = 0;
            document.getElementById('slider-blur').value = 0;
            
            updateAdjustmentValues();
            initCanvas();
            
            // Relocate detectors back
            if (activeEditorImage.aiObject) {
                detectBox1.style.left = `${activeEditorImage.aiObject.xRel * 100}%`;
                detectBox1.style.top = `${activeEditorImage.aiObject.yRel * 100}%`;
                detectBox1.style.display = 'block';
            }
            
            document.getElementById('editor-status').textContent = 'Reset all changes.';
        };
    });

    // Close & Cancel buttons
    editorClose.addEventListener('click', () => {
        editorModal.classList.add('hidden');
        activateCroppingUI(false);
        activateAiOverlay(false);
    });
    
    document.getElementById('editor-cancel-btn').addEventListener('click', () => {
        editorClose.click();
    });

    // Save final changes back to image registry list
    document.getElementById('editor-save-btn').addEventListener('click', () => {
        if (!activeEditorImage) return;
        
        // Save canvas representation
        activeEditorImage.url = editorCanvas.toDataURL();
        
        // Update details dimensions
        activeEditorImage.dimensions = `${editorCanvas.width} x ${editorCanvas.height}`;
        
        editorModal.classList.add('hidden');
        lightboxClose.click();
        renderGallery();
        showNotification('Saved changes back to Gallery.');
    });

    // ==========================================================================
    // 6C. DRAW & TEXT MARKUP INTERACTIVE CONTROLS
    // ==========================================================================
    // Color Dot click handlers
    document.querySelectorAll('#brush-colors .color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            document.querySelectorAll('#brush-colors .color-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            selectedDrawColor = dot.dataset.color;
            document.getElementById('editor-status').textContent = `Drawing color switched to ${selectedDrawColor}.`;
        });
    });

    // Brush width slider listener
    document.getElementById('slider-draw-brush-width').addEventListener('input', (e) => {
        selectedBrushWidth = e.target.value;
        document.getElementById('val-draw-brush-width').textContent = selectedBrushWidth + 'px';
    });

    // Toggle freehand drawing mode
    document.getElementById('draw-mode-toggle-btn').addEventListener('click', () => {
        isDrawModeActive = !isDrawModeActive;
        const btn = document.getElementById('draw-mode-toggle-btn');
        if (isDrawModeActive) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fa-solid fa-paint-brush"></i> <span>Draw Mode: ON</span>';
            document.getElementById('editor-status').textContent = 'Draw mode active. Click-drag on canvas to sketch.';
            
            // Deactivate text stamp & sticker modes
            isStampingText = false;
            isStampingSticker = false;
            document.getElementById('draw-add-text-btn').classList.remove('active');
            document.getElementById('draw-add-text-btn').innerHTML = '<i class="fa-solid fa-font"></i> Click Canvas to Stamp Text';
            document.querySelectorAll('.emoji-sticker-btn').forEach(b => b.classList.remove('active'));
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="fa-solid fa-paint-brush"></i> <span>Draw Mode: OFF</span>';
            document.getElementById('editor-status').textContent = 'Draw mode deactivated.';
        }
    });

    // Add text stamp overlay action button
    document.getElementById('draw-add-text-btn').addEventListener('click', () => {
        const textVal = document.getElementById('draw-text-input').value.trim();
        if (textVal === '') {
            showNotification('Please type some text in the box first!');
            return;
        }

        isStampingText = !isStampingText;
        const btn = document.getElementById('draw-add-text-btn');
        if (isStampingText) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fa-solid fa-crosshairs"></i> Tap Canvas to Stamp';
            textToStamp = textVal;
            document.getElementById('editor-status').textContent = 'Tap anywhere on the canvas to place text overlays.';

            // Deactivate draw mode & stickers
            isDrawModeActive = false;
            document.getElementById('draw-mode-toggle-btn').classList.remove('active');
            document.getElementById('draw-mode-toggle-btn').innerHTML = '<i class="fa-solid fa-paint-brush"></i> <span>Draw Mode: OFF</span>';
            isStampingSticker = false;
            document.querySelectorAll('.emoji-sticker-btn').forEach(b => b.classList.remove('active'));
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="fa-solid fa-font"></i> Stamp Text';
            textToStamp = '';
        }
    });

    // Sticker emojis buttons
    document.querySelectorAll('.emoji-sticker-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const emoji = btn.dataset.emoji;
            if (selectedSticker === emoji && isStampingSticker) {
                isStampingSticker = false;
                selectedSticker = '';
                btn.classList.remove('active');
                document.getElementById('editor-status').textContent = 'Sticker stamping disabled.';
            } else {
                document.querySelectorAll('.emoji-sticker-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedSticker = emoji;
                isStampingSticker = true;
                document.getElementById('editor-status').textContent = `Sticker "${emoji}" selected. Click canvas to stamp.`;

                // Deactivate draw & text stamp modes
                isDrawModeActive = false;
                document.getElementById('draw-mode-toggle-btn').classList.remove('active');
                document.getElementById('draw-mode-toggle-btn').innerHTML = '<i class="fa-solid fa-paint-brush"></i> <span>Draw Mode: OFF</span>';
                isStampingText = false;
                document.getElementById('draw-add-text-btn').classList.remove('active');
                document.getElementById('draw-add-text-btn').innerHTML = '<i class="fa-solid fa-font"></i> Click Canvas to Stamp Text';
            }
        });
    });

    // Apply Polaroid frame border layout
    document.getElementById('frame-polaroid-btn').addEventListener('click', () => {
        showNotification('Applying Polaroid card border...');
        
        // Calculate new expanded canvas dimensions
        const borderX = 35; // top, left, right border width in pixels
        const borderBottom = 90; // bottom border width
        
        const newW = editorCanvas.width + (borderX * 2);
        const newH = editorCanvas.height + borderX + borderBottom;
        
        // Store current canvas content
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = editorCanvas.width;
        tempCanvas.height = editorCanvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(editorCanvas, 0, 0);
        
        // Resize main canvas
        editorCanvas.width = newW;
        editorCanvas.height = newH;
        
        // Draw frame background (Polaroid white card style)
        editorCtx.fillStyle = '#fbfbf9'; // subtle cream polaroid white
        editorCtx.fillRect(0, 0, newW, newH);
        
        // Draw shadow inner border
        editorCtx.strokeStyle = 'rgba(0,0,0,0.15)';
        editorCtx.lineWidth = 1;
        editorCtx.strokeRect(borderX - 1, borderX - 1, tempCanvas.width + 2, tempCanvas.height + 2);
        
        // Draw image inside frame
        editorCtx.drawImage(tempCanvas, borderX, borderX);
        
        // Write details watermark inside Polaroid footer
        editorCtx.font = 'italic 16px "Fira Code", monospace';
        editorCtx.fillStyle = 'rgba(0,0,0,0.5)';
        editorCtx.fillText(activeEditorImage.title, borderX + 10, newH - 45);
        editorCtx.font = '12px "Fira Code", monospace';
        editorCtx.fillText(activeEditorImage.date.split(' ')[0], borderX + 10, newH - 25);
        
        canvasImage = new Image();
        canvasImage.onload = function() {
            document.getElementById('editor-status').textContent = 'Applied Polaroid card format.';
        };
        canvasImage.src = editorCanvas.toDataURL();
    });

    // Apply Neon border glow outline frame
    document.getElementById('frame-neon-btn').addEventListener('click', () => {
        showNotification('Applying neon glowing frame...');
        
        editorCtx.save();
        editorCtx.strokeStyle = selectedDrawColor;
        editorCtx.lineWidth = 16;
        editorCtx.shadowColor = selectedDrawColor;
        editorCtx.shadowBlur = 20;
        
        // Draw neon border stroke inside the canvas boundary
        editorCtx.strokeRect(8, 8, editorCanvas.width - 16, editorCanvas.height - 16);
        editorCtx.restore();
        
        canvasImage = new Image();
        canvasImage.onload = function() {
            document.getElementById('editor-status').textContent = 'Neon glowing outline applied.';
        };
        canvasImage.src = editorCanvas.toDataURL();
    });

    // Freehand Canvas Drawing & Text/Sticker Stamping Mouse Listeners
    editorCanvas.addEventListener('mousedown', (e) => {
        const rect = editorCanvas.getBoundingClientRect();
        const scaleX = editorCanvas.width / rect.width;
        const scaleY = editorCanvas.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        if (isDrawModeActive) {
            isDrawingOnCanvas = true;
            editorCtx.beginPath();
            editorCtx.moveTo(x, y);
            editorCtx.lineWidth = selectedBrushWidth;
            editorCtx.lineCap = 'round';
            editorCtx.lineJoin = 'round';
            editorCtx.strokeStyle = selectedDrawColor;
            editorCtx.stroke();
        } else if (isStampingText && textToStamp !== '') {
            editorCtx.font = 'bold 36px Outfit, Inter, sans-serif';
            editorCtx.fillStyle = selectedDrawColor;
            editorCtx.fillText(textToStamp, x, y);
            
            // Reset state
            isStampingText = false;
            document.getElementById('draw-add-text-btn').classList.remove('active');
            document.getElementById('draw-add-text-btn').innerHTML = '<i class="fa-solid fa-font"></i> Click Canvas to Stamp Text';
            document.getElementById('draw-text-input').value = '';
            textToStamp = '';
            showNotification('Text annotation added.');
            
            // Update backup image source
            canvasImage = new Image();
            canvasImage.onload = () => {};
            canvasImage.src = editorCanvas.toDataURL();
        } else if (isStampingSticker && selectedSticker !== '') {
            editorCtx.font = '48px serif';
            editorCtx.fillText(selectedSticker, x, y);
            
            // Reset state
            isStampingSticker = false;
            document.querySelectorAll('.emoji-sticker-btn').forEach(btn => btn.classList.remove('active'));
            selectedSticker = '';
            showNotification('Sticker placed.');
            
            // Update backup image source
            canvasImage = new Image();
            canvasImage.onload = () => {};
            canvasImage.src = editorCanvas.toDataURL();
        }
    });

    editorCanvas.addEventListener('mousemove', (e) => {
        if (!isDrawingOnCanvas || !isDrawModeActive) return;
        const rect = editorCanvas.getBoundingClientRect();
        const scaleX = editorCanvas.width / rect.width;
        const scaleY = editorCanvas.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        editorCtx.lineTo(x, y);
        editorCtx.stroke();
    });

    const stopDrawing = () => {
        if (isDrawingOnCanvas) {
            isDrawingOnCanvas = false;
            // Save changes in memory
            canvasImage = new Image();
            canvasImage.onload = () => {};
            canvasImage.src = editorCanvas.toDataURL();
        }
    };
    editorCanvas.addEventListener('mouseup', stopDrawing);
    editorCanvas.addEventListener('mouseleave', stopDrawing);

    // Touch Support for mobile canvas markup
    editorCanvas.addEventListener('touchstart', (e) => {
        if (!isDrawModeActive) return;
        e.preventDefault();
        const rect = editorCanvas.getBoundingClientRect();
        const scaleX = editorCanvas.width / rect.width;
        const scaleY = editorCanvas.height / rect.height;
        const touch = e.touches[0];
        const x = (touch.clientX - rect.left) * scaleX;
        const y = (touch.clientY - rect.top) * scaleY;

        isDrawingOnCanvas = true;
        editorCtx.beginPath();
        editorCtx.moveTo(x, y);
        editorCtx.lineWidth = selectedBrushWidth;
        editorCtx.lineCap = 'round';
        editorCtx.lineJoin = 'round';
        editorCtx.strokeStyle = selectedDrawColor;
        editorCtx.stroke();
    });

    editorCanvas.addEventListener('touchmove', (e) => {
        if (!isDrawingOnCanvas || !isDrawModeActive) return;
        e.preventDefault();
        const rect = editorCanvas.getBoundingClientRect();
        const scaleX = editorCanvas.width / rect.width;
        const scaleY = editorCanvas.height / rect.height;
        const touch = e.touches[0];
        const x = (touch.clientX - rect.left) * scaleX;
        const y = (touch.clientY - rect.top) * scaleY;

        editorCtx.lineTo(x, y);
        editorCtx.stroke();
    });

    editorCanvas.addEventListener('touchend', stopDrawing);

    // ==========================================================================
    // 7. SECURE VAULT ACCESS CONTROL
    // ==========================================================================
    
    const secureLockModal = document.getElementById('secure-lock-modal');
    const pinCloseBtn = document.getElementById('pin-close');
    const pinClearBtn = document.getElementById('pin-clear');
    
    function openSecureFolderLocker() {
        pinEntered = '';
        updatePinDots();
        secureLockModal.classList.remove('hidden');
    }

    pinCloseBtn.addEventListener('click', () => {
        secureLockModal.classList.add('hidden');
    });

    // Keypad numeric click triggers
    document.querySelectorAll('.pin-btn[data-num]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (pinEntered.length < 4) {
                pinEntered += btn.dataset.num;
                updatePinDots();
                
                if (pinEntered.length === 4) {
                    // Check PIN validation
                    setTimeout(validateSecurePIN, 300);
                }
            }
        });
    });

    pinClearBtn.addEventListener('click', () => {
        pinEntered = '';
        updatePinDots();
    });

    function updatePinDots() {
        const dots = document.querySelectorAll('.pin-display .pin-dot');
        dots.forEach((dot, index) => {
            if (index < pinEntered.length) {
                dot.classList.add('filled');
            } else {
                dot.classList.remove('filled');
            }
        });
    }

    function validateSecurePIN() {
        const lockpadCard = document.querySelector('.lockpad-card');
        if (pinEntered === CORRECT_PIN) {
            isVaultUnlocked = true;
            secureLockModal.classList.add('hidden');
            
            // Open secure library folder
            const secureNavItem = document.getElementById('nav-secure');
            document.querySelectorAll('.sidebar-nav .nav-item').forEach(nav => nav.classList.remove('active'));
            secureNavItem.classList.add('active');
            
            currentFilter = 'secure';
            document.getElementById('breadcrumb-current').textContent = 'Secure Folder';
            
            showNotification('Vault unlocked successfully.');
            renderGallery();
        } else {
            // Shake card animation
            lockpadCard.classList.add('shake');
            pinEntered = '';
            
            setTimeout(() => {
                lockpadCard.classList.remove('shake');
                updatePinDots();
                showNotification('Incorrect PIN. Please try again.');
            }, 500);
        }
    }


    // ==========================================================================
    // 8. CURATED HIGHLIGHTS STORIES SLIDESHOW
    // ==========================================================================
    
    let storyList = [];
    let storyIndex = 0;
    let storyTimer = null;
    let storyProgressPct = 0;
    const STORY_DURATION = 4000; // ms per slide
    const storyModal = document.getElementById('story-modal');
    const storyImg = document.getElementById('story-img');
    const storyCaption = document.getElementById('story-caption');
    const storyTitleDisplay = document.getElementById('story-title-display');
    const storyDateDisplay = document.getElementById('story-date-display');
    const storyProgressContainer = document.getElementById('story-progress-container');
    const bgMusic = document.getElementById('story-bg-music');
    const musicToggle = document.getElementById('story-music-toggle');
    const storyVisualizer = document.getElementById('story-visualizer');
    
    let isMusicPlaying = false;

    // Create Story trigger
    document.getElementById('bulk-story-btn').addEventListener('click', () => {
        // Collect current filtered list or all public camera files
        let list = galleryData.filter(img => !img.isLocked && (img.category === 'camera' || img.category === 'downloads'));
        
        if (list.length === 0) {
            showNotification('No photos available to compile highlights.');
            return;
        }

        // Limit to max 6 slides for short highlights
        storyList = list.slice(0, 6);
        openStoryPlayer();
    });

    // Highlight menu sidebar item trigger
    document.getElementById('nav-stories').addEventListener('click', () => {
        document.getElementById('bulk-story-btn').click();
    });

    function openStoryPlayer() {
        storyIndex = 0;
        storyModal.classList.remove('hidden');
        
        // Reset Visualizer
        storyVisualizer.classList.remove('playing');
        isMusicPlaying = false;
        bgMusic.pause();
        bgMusic.currentTime = 0;
        
        // Build Progress lines
        storyProgressContainer.innerHTML = '';
        storyList.forEach(() => {
            const bar = document.createElement('div');
            bar.className = 'story-progress-bar';
            bar.innerHTML = '<div class="story-progress-fill"></div>';
            storyProgressContainer.appendChild(bar);
        });

        loadStorySlide();
    }

    function loadStorySlide() {
        if (storyList.length === 0) return;
        const imgObj = storyList[storyIndex];
        
        storyImg.src = imgObj.url;
        storyCaption.textContent = `${imgObj.title} - Taken with ${imgObj.camera.split('|')[0]}`;
        storyTitleDisplay.textContent = 'Curated Highlights';
        storyDateDisplay.textContent = imgObj.date.split(' ')[0];
        
        // Reset and clear former timers
        clearInterval(storyTimer);
        storyProgressPct = 0;
        
        // Update bar statuses
        const progressLines = document.querySelectorAll('.story-progress-fill');
        progressLines.forEach((fill, index) => {
            fill.className = 'story-progress-fill';
            if (index < storyIndex) {
                fill.classList.add('completed');
                fill.style.width = '100%';
            } else {
                fill.style.width = '0%';
            }
        });

        // Start slide progress ticker
        const activeBarFill = progressLines[storyIndex];
        const stepMs = 40; // update frequency
        const stepPct = (stepMs / STORY_DURATION) * 100;
        
        storyTimer = setInterval(() => {
            storyProgressPct += stepPct;
            if (storyProgressPct >= 100) {
                storyProgressPct = 100;
                activeBarFill.style.width = '100%';
                clearInterval(storyTimer);
                advanceStory(1); // advance next
            } else {
                activeBarFill.style.width = `${storyProgressPct}%`;
            }
        }, stepMs);
    }

    function advanceStory(direction) {
        storyIndex += direction;
        
        if (storyIndex >= storyList.length) {
            // End of story highlights
            closeStoryPlayer();
        } else if (storyIndex < 0) {
            // Go back index zero loop
            storyIndex = 0;
            loadStorySlide();
        } else {
            loadStorySlide();
        }
    }

    function closeStoryPlayer() {
        clearInterval(storyTimer);
        storyModal.classList.add('hidden');
        bgMusic.pause();
    }

    document.getElementById('story-close').addEventListener('click', closeStoryPlayer);
    document.getElementById('story-prev').addEventListener('click', () => advanceStory(-1));
    document.getElementById('story-next').addEventListener('click', () => advanceStory(1));

    // Audio backgrounds toggles
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            storyVisualizer.classList.remove('playing');
            musicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            isMusicPlaying = false;
        } else {
            bgMusic.play().then(() => {
                storyVisualizer.classList.add('playing');
                musicToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
                isMusicPlaying = true;
            }).catch(() => {
                showNotification('Press again to trigger background sound.');
            });
        }
    });


    // ==========================================================================
    // 9. HELPER NOTIFICATIONS & BOOTSTRAP
    // ==========================================================================
    
    function showNotification(message) {
        // Build toast div
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `<i class="fa-solid fa-info-circle"></i> <span>${message}</span>`;
        
        // CSS for notifications
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'rgba(20, 20, 30, 0.95)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            padding: '12px 20px',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-md)',
            zIndex: '3000',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '13px',
            fontWeight: '500',
            animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none'
        });
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transition = 'opacity 0.3s ease';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }

    // ==========================================================================
    // 10. SHARE MODAL INTERACTION LOGIC
    // ==========================================================================
    let activeShareImage = null;
    const shareModal = document.getElementById('share-modal');
    const shareClose = document.getElementById('share-close');
    const copyLinkBtn = document.getElementById('share-copy-link-btn');

    function openShareModal(image) {
        activeShareImage = image;
        shareModal.classList.remove('hidden');
    }

    shareClose.addEventListener('click', () => {
        shareModal.classList.add('hidden');
    });

    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            shareModal.classList.add('hidden');
        }
    });

    document.querySelectorAll('.share-platform-btn[data-platform]').forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.platform;
            showNotification(`Opening ${platform} to share "${activeShareImage.title}"...`);
            setTimeout(() => {
                shareModal.classList.add('hidden');
                showNotification(`Successfully shared to ${platform}!`);
            }, 1200);
        });
    });

    copyLinkBtn.addEventListener('click', () => {
        const fakeLink = `${window.location.origin}/photo/${activeShareImage.id}`;
        navigator.clipboard.writeText(fakeLink).then(() => {
            showNotification('Image link copied to clipboard!');
            shareModal.classList.add('hidden');
        }).catch(() => {
            const input = document.createElement('input');
            input.value = fakeLink;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            input.remove();
            showNotification('Image link copied to clipboard!');
            shareModal.classList.add('hidden');
        });
    });

    // Share button trigger inside lightbox
    const shareTriggerBtn = document.getElementById('lb-share-btn');
    shareTriggerBtn.addEventListener('click', () => {
        const image = activeLightboxList[activeImageIndex];
        if (!image) return;
        
        openShareModal(image);
    });

    // Initialize application grid rendering
    renderGallery();
});
