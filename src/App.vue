<script setup lang="ts">
import { computed } from 'vue';

const getImageUrl = (name: string): string => {
 return new URL(`../assets/images/${name}`, import.meta.url).href;
}

interface Product {
 id: number;
 name: string;
 price: number;
 description: string;
 image: string;
 category: string;
}

const products: Product[] = [
 {
   id: 1,
   name: "MacBook Pro",
   price: 1299.99,
   description: "Ordinateur portable puissant pour les professionnels",
   image: "macbook.jpg",
   category: "Informatique"
 },
 {
   id: 2,
   name: "iPhone 15",
   price: 999.99,
   description: "Dernier smartphone haut de gamme",
   image: "iphone.jpg",
   category: "Téléphonie"
 },
 {
   id: 3,
   name: "iPad Air",
   price: 599.99,
   description: "Tablette polyvalente et légère",
   image: "ipad.jpg",
   category: "Tablettes"
 },
 {
   id: 4,
   name: "AirPods Pro",
   price: 249.99,
   description: "Écouteurs sans fil avec réduction de bruit",
   image: "airpods.jpg",
   category: "Audio"
 },
 {
   id: 5,
   name: "iMac",
   price: 1499.99,
   description: "Ordinateur tout-en-un design",
   image: "imac.jpg",
   category: "Informatique"
 },
 {
   id: 6,
   name: "Apple Watch",
   price: 399.99,
   description: "Montre connectée avec suivi santé",
   image: "watch.jpg",
   category: "Accessoires"
 },
 {
   id: 7,
   name: "Mac Mini",
   price: 699.99,
   description: "Ordinateur compact et puissant",
   image: "macmini.jpg",
   category: "Informatique"
 },
 {
   id: 8,
   name: "AirPods Max",
   price: 549.99,
   description: "Casque audio premium",
   image: "airpodsmax.jpg",
   category: "Audio"
 },
 {
   id: 9,
   name: "iPad Pro",
   price: 799.99,
   description: "Tablette professionnelle haute performance",
   image: "ipadpro.jpg",
   category: "Tablettes"
 },
 {
   id: 10,
   name: "Apple TV",
   price: 179.99,
   description: "Box multimédia streaming 4K",
   image: "appletv.jpg",
   category: "Multimédia"
 }
];

// Propriété calculée pour trier les produits par prix
const sortedProducts = computed(() => {
 return [...products].sort((a, b) => a.price - b.price);
});
</script>

<template>
 <div class="container text-center py-4">
   <h1 class="text-center mb-4">Catalogue de Produits</h1>
   <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
     <div v-for="product in sortedProducts" :key="product.id" class="col">
       <div class="card h-100">
         <img :src="getImageUrl(product.image)" class="card-img-top" :alt="product.name">
         <div class="card-body">
           <h5 class="card-title">{{ product.name }}</h5>
           <p class="card-text">{{ product.description }}</p>
           <p class="card-text"><small class="text-muted">Catégorie: {{ product.category }}</small></p>
           <p class="card-text fw-bold">{{ product.price.toFixed(2) }} $</p>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<style scoped>
.card {
 transition: transform 0.2s;
}

.card:hover {
 transform: translateY(-5px);
}
</style>