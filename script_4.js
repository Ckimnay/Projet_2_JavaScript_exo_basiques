const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
    ];
    
    //Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
    liste_entrepreneurs = [];
    liste_age = [];
    
    
    console.log("les entrepreneurs qui sont nés dans les années 70 sont: ");
    console.log("");
    
    for (var x = 0; x < entrepreneurs.length; x++){
    
      if (entrepreneurs[x].year >= 1970 && entrepreneurs[x].year <= 1979){
        console.log(entrepreneurs[x].first + " " + entrepreneurs[x].last + " " + " né en " + entrepreneurs[x].year)
      }
      liste_entrepreneurs.push (entrepreneurs[x].first + " " + entrepreneurs[x].last);
      liste_age.push (entrepreneurs[x].first + " " + entrepreneurs[x].last + " " + String(2019 - entrepreneurs[x].year) + " Ans");
    }
      console.log("");
      console.log("Les entrepreneurs sont :");
      console.log(liste_entrepreneurs);
      console.log("");
      console.log("Ages des entrepreneurs en 2019")
      console.log(liste_age)
    
      console.log("")
      console.log("classement par ordre Alphabetique")
      entrepreneurs.sort(function(a, b){
        if(a.last < b.last) { return -1; }
        if(a.last > b.last) { return 1; }
          return 0;
        })
      console.log(entrepreneurs)
    
    
    
    
    
    
    
    //Trie les entrepreneurs par ordre alphabétique
    //du nom de famille.
    