# Fso-project

This is a project work for Full Stack Open 2022 course.

This application is used to keep track of a gym's bookings.

## This project is not complete yet.

<!---
[Käyttöohje](https://github.com/mluukkai/OtmTodoApp/blob/master/dokumentaatio/kayttoohje.md)

[Vaatimusmäärittely](https://github.com/mluukkai/OtmTodoApp/blob/master/dokumentaatio/vaatimusmaarittely.md)

[Arkkitehtuurikuvaus](https://github.com/mluukkai/OtmTodoApp/blob/master/dokumentaatio/arkkitehtuuri.md)

[Testausdokumentti](https://github.com/mluukkai/OtmTodoApp/blob/master/dokumentaatio/testaus.md)
-->

[Record of working hours](https://github.com/hhokka/fso-project/blob/main/dokumentaatio/tuntikirjanpito.md)

<!---

## Releaset

[Viikko 5](https://github.com/mluukkai/OtmTodoApp/releases/tag/viikko5)

## Komentorivitoiminnot

### Testaus

Testit suoritetaan komennolla

```
mvn test
```

Testikattavuusraportti luodaan komennolla

```
mvn jacoco:report
```

Kattavuusraporttia voi tarkastella avaamalla selaimella tiedosto _target/site/jacoco/index.html_

### Suoritettavan jarin generointi

Komento

```
mvn package
```

generoi hakemistoon _target_ suoritettavan jar-tiedoston _OtmTodoApp-1.0-SNAPSHOT.jar_

### JavaDoc

JavaDoc generoidaan komennolla

```
mvn javadoc:javadoc
```

JavaDocia voi tarkastella avaamalla selaimella tiedosto _target/site/apidocs/index.html_

### Checkstyle

Tiedostoon [checkstyle.xml](https://github.com/mluukkai/OtmTodoApp/blob/master/checkstyle.xml) määrittelemät tarkistukset suoritetaan komennolla

```
 mvn jxr:jxr checkstyle:checkstyle
```

Mahdolliset virheilmoitukset selviävät avaamalla selaimella tiedosto _target/site/checkstyle.html_

## Javan ja Mavenin asennusohjeita Macille Homebrew'n kautta

Homebrew on Linuxin pakettimanagereita vastaava pakettimanageri MacOS-käyttöjärjestelmälle. Nämä ohjeet toimivat ainakin MacOS:n versiolle 10.15. [Asennusohjeet Homebrew'lle.](https://brew.sh/index_fi)

### Javan asennus
Homebrew'n asennuksen jälkeen Javan saa asennettua Macille yksinkertaisesti esimerkiksi komennolla

```
brew install adoptopenjdk
```
### Mavenin asennus ja paluu Javan versioon 11
Mavenin saa asennettua komennolla

```
brew install maven
```

Tällöin Mavenin oletuksena käyttämä Java-versio on Java 15. Java-versioon 11 päästään asentamalla Java 11 komennolla

```
brew install java11
```
Lisäksi täytyy osoittaa Mavenille Javan versio 11. Mavenin versiolla 3.6.3_1 tämä tapahtuu muokkaamalla tiedostoa: /usr/local/Cellar/maven/3.6.3_1/bin/mvn esim. nanolla komennolla

```
sudo nano /usr/local/Cellar/maven/3.6.3_1/bin/mvn
```
HUOM Muista tarkistaa mikä versio Mavenista asentui ja muokkaa tiedostopolkuun oikea versio version 3.6.3_1 tilalle

Muokkaa rivi
```
JAVA_HOME="${JAVA_HOME:-/usr/local/opt/openjdk/libexec/openjdk.jdk/Contents/Home}" exec "/usr/local/Cellar/maven/
```
Muotoon
```
JAVA_HOME="${JAVA_HOME:-/usr/local/opt/openjdk@11/libexec/openjdk.jdk/Contents/Home}" exec "/usr/local/Cellar/maven/
```
Eli muokkaa polkuun ```openjdk``` ```openjdk@11``` ja tallenna tiedosto. Nyt voit tarkistaa komennolla ```mvn --version```, että Maven käyttää Javan versiota 11.

Käyttöjärjestelmän Java version vaihtaminen onnistuu esimerkiksi lisäämällä tiedoston: ```~/.zshrc``` (vanhemmilla MacOS-käyttöjärjestelmillä ```~/.bashrc```) loppuun rivi
```
export JAVA_HOME=/usr/local/opt/openjdk@11/libexec/openjdk.jdk/Contents/Home/
```
Muista käynnistää lisäyksen jälkeen terminaali uudestaan, jolloin komento ```java --version``` näyttää versioksi 11.
-->
