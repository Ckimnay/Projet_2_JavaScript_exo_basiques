const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 45 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 67 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  //======================================================================//   
  //== Est-ce que tous les livres ont été au moins empruntés une fois ? ==//
  //======================================================================//
   
   taille = books.length ;
   let a = 0 ;
  
    for (let i = 0; i <= (taille - 1); i++) {
  
      if (books[i].rented == 0){ a = a + 1 } ;
    }
  
    if (a > 0) { console.log("Certains livres n'ont pas été empruntés !") }
    else { console.log("Tous les livres ont été empruntés au moins une fois !") }
  
  
  //======================================================================//   
  //=================== Quel est livre le plus emprunté ? ================//
  //======================================================================//
  
  booksRented = [];
  
    for (let i = 0; i <= (taille - 1); i++) {
  
         booksRented[i] = books[i].rented
    };
  
    var b = (Math.max(...booksRented));
    var c = booksRented.indexOf(b);
  
    console.log("Le bouquin le plus emprunté est : " + books[c].title + " si tu l'as pas lu, tu sais quoi faire !");    
  
  
  //======================================================================//   
  //================= Quel est le livre le moins emprunté ?===============//
  //======================================================================//
  
   for (let i = 0; i <= (taille - 1); i++) {
  
         booksRented[i] = books[i].rented
    };
  
    var d = (Math.min(...booksRented));
    var e = booksRented.indexOf(d);
  
    console.log("Le bouquin le moins emprunté est : " + books[e].title + " (C\'est vrai qu\'il se branle, mais est-ce vraiment mérité ?"); 
  
  
  //======================================================================//   
  //================== Trouve le livre avec l'ID: 873495 =================//
  //======================================================================//
  
  let id_1 = 873495;
  let booksID = [];
  
    for (let i = 0; i <= (taille - 1); i++) {
  
        booksID[i] = books[i].id
    };
      var f = booksID.indexOf(id_1);
  
      console.log("Le bouquin référencé " + id_1 + " est intitulé " + books[f].title )
  
  //======================================================================//   
  //================= Supprime le livre avec l'ID: 133712 ================//
  //======================================================================//
  
  let id_2 = 133712
  
  var g = booksID.indexOf(id_2);
  
  books.splice(g,1);
  
  console.log("Suppression de l'indice 133712")
  console.log(books) 
  
  
  //======================================================================//   
  //================ Trie les livres par ordre alphabétique ==============//
  //======================================================================//
  
    books.sort(function(h, k){
      if(h.title < k.title) { return -1; }
      if(h.title > k.title) { return 1; }
      return 0;
      })
  
    console.log(books)