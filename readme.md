#Buat sebuah halaman HTML STATIS dari antarmuka internet-based music streaming service dengan desain seperti berikut :
https://drive.google.com/file/d/1h_n0qSVDedAySuG5PlHL7_B8ng4JSEY8/view?usp=sharing


## Teknis kebutuhan informasi situs : 

1. Konten situs terbagi dua, antarmuka navigasi dan antarmuka pemutar musik

2. Konten navigasi berada pada sisi kiri situs dengan rasio lebar 20%, sedangkan antarmuka pemutar musik di sebelah kanan
dengan rasio lebar 76%. Sisa rasio layar akan menjadi jarak pemisah antarelemen.

3. Memiliki sebuah indikator lagu yang sedang dimainkan.

4. Memiliki sebuah carousel/slider yang digunakan sebagai pencarian cepat dari genre musik yang tersedia.
	a) Ketika pengguna mengarahkan mouse pada salah satu genre maka efek "opacity" dari gambar akan berubah menjadi "0.9"

4. Memiliki sebuah carousel/slider yang digunakan sebagai pencarian cepat dari beberapa playlist yang disediakan oleh Editor situs.
	a) Ketika pengguna mengarahkan mouse pada salah satu genre maka efek "opacity" dari gambar akan berubah menjadi "0.9"
	b) Ketika pengguna mengarahkan mouse pada salah satu genre maka akan tertampil 3 icon berikut : play, favorite, more options 

5. Baik carousel/slider genre musik dan playlist akan melompati 4 item ketika tanda panah navigasi slider di-klik

6. Jarak antaritem pada carousel/slider genre adalah 40px

6. Jarak antaritem pada carousel/slider playlist adalah 20px

7. Baik carousel/slider genre musik dan playlist akan menampilkan :
	a) 4 item ketika ukuran layar memiliki ukuran minimal 769px
	b) 3 item ketika ukuran layar memiliki ukuran dibawah 768px
	c) 1 item ketika ukuran layar memiliki ukuran dibawah 767px


## Teknis kebutuhan teknikal situs :

1. HTML
2. CSS atau LESS atau SCSS (pilih salah satu)
3. jQuery Core Library (https://code.jquery.com/)
4. Owl Slider (https://owlcarousel2.github.io/OwlCarousel2/index.html)
5. Google Font : Roboto (400,500) , Open Sans(300, 400, 600)
6. Icon, SVG akan disediakan secara default


## Responsive Preview :
CSS media query dilakukan di layar berukuran
1. 640px dan ke bawah, 
2. 768px (ukuran menu icon adalah 22px X 22px)
3. 1024px, 
4. di atas 1024/desktop, dapat dilihat pada:
https://drive.google.com/drive/folders/14dlGumoZ4cjOKasRypW422VCX4R68QbE?usp=sharing