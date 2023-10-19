# Mysteka
## Introducción
Existen muchos sitios web dedicados a ocultismo, adivinación, etc. utilizados mayormente como medio publicitario para los dueños de las páginas web, pero está poco trabajado el diseño web de estos mismos sitios y enfocados al dueño del servidor. Esta página web estará enfocado como "wiki" o blog de estos temas y pensado más para los visitantes que quieran informarse de dichos temas.

### Tema
El tema principal del sitio web es todo material relacionado a la adivinación, astrología, misticismo, con especial hincapié en la primera, su interpretación y simbología.

### Qué quiero transmitir
Quiero crear una página web *sencilla* y *organizada* de información sobre tarot, astrología y otras prácticas místicas desde un punto de vista informativo y objetivo. Se usará exclusivamente como web de información dedicado al mismo.

### Colores
La gama de color es crucial para un buen diseño web, ya que con ello se transmite diferentes sensaciones en los posibles visitantes, que sean colores adecuados para la vista y que combinen bien con la temática del sitio web: misticismo, espiritualidad y esoterismo.

### Justificación de colores
Para la página web los colores que he decidido tomar son dos de la gama de color fría y una cálida para generar contraste. Todos los colores escogidos tienen una simbología y sensación cercana a la temática mística y espiritual del sitio web.
Los colores y su significado son los siguientes:

![#a35FFF](https://placehold.co/15x15/a35FFF/a35FFF.png) Orquídea: Calma, misterio, meditación (`#f03c15`)

![#4c60ff](https://placehold.co/15x15/4c60ff/4c60ff.png) Azul real: Paz, armonía (`#4c60ff`)

![#ffd33d](https://placehold.co/15x15/ffd33d/ffd33d.png) Oro: Poder, conocimiento, sabiduría (`#ffd33d`)

No son los colores web exactos, ya que están adaptados para la página web, pero para referirnos a ellos usaremos los que sean más parecidos.

#### Fichero html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Colores Web</title>
</head>
<body>
    <h1>Tabla de colores base</h1>
<table>
    <tr>
        <td>Color (parecido)</td>
        <td>Tipo de color</td>
        <td>Código de color Hex</td>
    </tr>
    <tr>
        <td style="background-color: #a35FFF; color: white;">Orquídea</td>
        <td style="background-color: #a35FFF; color: white;">Color principal</td>
        <td style="background-color: #a35FFF; color: white;">#A35FFF</td>
    </tr>
    <tr>
        <td style="background-color: #4c60ff; color: white;">Azul Real</td>
        <td style="background-color: #4c60ff; color: white;">Color secundario</td>
        <td style="background-color: #4c60ff; color: white;">#4C60FF</td>
    </tr>
    <tr>
        <td style="background-color: #ffd33d; color: black;">Dorado</td>
        <td style="background-color: #ffd33d; color: black;">Color terciario</td>
        <td style="background-color: #ffd33d; color: black;">#FFD33D</td>
    </tr>
</table>
<h2>Muestrario de colores</h2>
<p><img src="img/MuestrasDeColor.PNG" width="300" height="300" class="center"></p>
</body>
</html>
```
#### Fichero CSS
```
table,th,td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: large;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
h1, h2{
  text-align: center;
}
```