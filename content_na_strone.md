# Kim jestem

Nazywam się Michał Przyłucki. Jestem programistą, DevOpsem, Team Leadem oraz przedsiębiorcą. Mam 6 lat doświadczenia w branży IT. Software Engineeringiem zajmuję się od 3 lat.


# Czym się zajmuję

Zajmuję się wszystkim co można by opisać frazą "Dostarczanie oprogramowania", począwszy od kontaktu z klientem, przez definicję wymagań, implementację rozwiązań, tworzenie dokumentacji, testowanie, dostarczenie rozwiązania, CI/CD aż po szkolenia (administratorów oraz pracownikó) oraz monitoring.

Na codzień dostarczam rozwiązania dla aplikacji wykorzystywanych w laboratoriach w branżach medycznych oraz produkcyjnych.

Moim głównym zajęciem jest przekształcanie wymagań klienta na logikę biznesową oraz jej implementacja. Poza tym istotnym elementem mojej pracy jest kontrola oraz rozwój CI/CD, projektowanie baz danych oraz planowanie pracy zespołu.

Swoją pozycję nazwałbym "FullStack + DevOps + TeamLead". 


## Projektowanie rozwiązań + programowanie

Sedno i najprzyjemniejsza część mojej pracy. Uwielbiam angażować się w rozwiązywanie problemów oraz tworzenie innowacyjnych rozwiązań.


## Kontakt z klientem

Od początku wdrożenia uczestniczę w spotkaniach z klientem w celu poznania jego wymagań i wytycznych. Omawiamy potencjalne problemy i planujemy konkretne elementy (w zależności od aktualnego etapu wdrożenia).


## Przeprowadzanie szkoleń

Regularnie przeprowadzam szkolenia z zakresu IT. Prowadzone przeze mnie szkolenia można podzielić na kilka kategorii:
- szkolenie administratorów - tutaj szkolę z użycia dockera, docker compose'a, docker huba oraz przydatnych narzędzi linuxowych
- szkolenie git - tutaj omawiam gita i githuba. W zależności od odbiorców, szkolenia zawierają takie elementy jak:
	- workflow - proces tworzenia i wdrażania oprogramowania
	- branching - podział
	- git actions - automatyzacja
	- git CLI - komendy oraz funkcjonalności gita
- szkolenie z wdrożenia - wewnętrzne i zewnętrzne szkolenia z działania budowanej aplikacji


## Team leading

Pomimo wielu obowiązków, związanych z codzienną pracą, jestem często odpowiedzialny za rozpisanie tasków oraz przypisanie ich do odpowiednich członków zespołu, tak aby praca całego teamu była jak najabrdziej zoptymalizowana i efektywna. Często też koordynuję pracę poszczególnych "podzespołów" tak aby wszystkie klocki aplikacji trafiły na swoje miejsce w odpowiednich interwałach czasowych.


## Jenkins maintenance

Jako twórca całej infrastruktury CI/CD, jestem odpowiedzialny za jego utrzymanie i konserwację.


## Wersjonowanie

Jako główny DevOps, jestem odpowiedzialny za periodyczne buildy aplikacji oraz jej wersjonowanie. W tym zawierają się mniejsze obowiązki takie jak: utrzymywanie changelogów, tagownie (git), nadzorowanie buildów, dostarczenie gotowych paczek aplikacji (jeśli klient wybrał najprostszy sposób dostarczania kolejnych wersji - wysyłanie paczek z zipem (tak też się zdarza)).


## Git Branching

W zależności od klienta, projektuję schematy branchingu oraz sam branching, tak aby najlepiej odzwierciedlał potrzeby klienta. Potrzebujemy 2 środowisk testowych dla różnych produktów oraz środowisko pośrednie (tzw. pre-prod) do bezbolesnej podmiany z prodem? Zajmę się tym.


## Zarządzanie środowiskami developerskimi oraz klienckimi

Jestem odpowiedzialny za tworzenie, utrzymanie oraz aktualizację środowisk. Oczywiście takie rzeczy jak aktualizacja może zostać zautomatyzowana, ale nadal jestem osobą, która sprawuje nad tym pieczę.


## Emergency actions

Najmniej przyjemna część mojej pracy to własnie tzw. "Emergency actions". Idealnym przykładem takiej akcji jest wgranie hotfixa na proda, albo natychmiastowa poprawka na konkretnym środowisku klienta. Zdecydowanie jestem zwolennikiem używania środowisk przygotowawczych, natomiast na przestrzeni lat nie sposób uniknąć sytuacji awaryjnej, nawet przy najwyższej jakości testach. W takim wypadku zdarza się konieczność wgrania ręcznie małej poprawki na serwerze produkcyjnym. To moja działka.

Innym przykładem może być na przykład jak najszybsze przerzucenie bazy danych pomiędzy dwoma różnymi środowiskami. Wtedy jestem odpowiedzialny za porównanie schematów baz danych, znalezienie ich różnic, przygotowanie "przeniesienia" oraz jego przeprowadzenie - od początku do końca.


# Technologie, których używam

## Python, Django oraz Django Rest Framework

Podstawowym elementem wykorzysywanym w mojej pracy jest Python. Używam go do wszystkiego. Moją karierę zawodową związaną z programowaniem zacząłem pisząc skrypy automatyzujące procesy biurowe w biurze rachunkowym.

Przy projektowaniu większego projektu aplikacji RESTAPI, korzystam z frameworka Django. To w nim zespół definiuje modele oraz logikę biznesową, czyli na tej warstwie zachodzi proces przekuwania wymagań klienta w funkcjonalność aplikacji.

Django rest framework jest używany na potrzeby tworzenia REST Api.


## Postgres

Na codzień używam (// TODO: Używam czy używamy?)bazy danych Postgres. Jest darmowa, potężna i znana. Jest idealnym partnerem do pracy z Django.
Ponadto często pojawia się konieczność stworzenia widoku, czy procedury w czystym SQL.


## React + TypeScript

Nie jestem frontendowcem i nie udaję, że jest inaczej. Potrafię wykorzystać komponenty oraz logikę napisaną przez zespół frontendowców. Potrafię też stworzyć swoją logikę oraz komponenty, które będą używane przez innych w przyszłości. Nie jest to natomiast standardowy element mojej codziennej pracy (chociaż był taki okres).


## Linux

Jestem nerdem ¯\_(ツ)_/¯. Używam linuxa w codziennej pracy oraz w codziennym życiu. Jeśli potrzebuję funkcjonalności Windowsa to używam WSL, albo VirtualBoxa. Zdarzyło mi się też używać VMWare. Od lat udoskonalam swoje dotfiles, oraz całe środowisko. Moim głównym IDE jest NeoVim, chociaż jeżeli akurat jestem na Windowsie i szybko muszę coś prototypować to nie stronię od Visual Studio Code, czy czasem nawet PyCharma. Używam też tmuxa do zarządzania sesjami.


## Docker, docker compose oraz Docker hub

Większość moich aplikacji jest tworzona z uwzględnieniem konteneryzacji. Uważam, że możliwość utworzenia wydzielonego środowiska oraz zarządzanie nim z poziomu systemu operacyjnego w ciągu kilkunastu sekund jest świetna. Używam konteneryzacji na codzień, nawet do małych projektów. Często dodaję do tego narzędzie orkiestracyjne, jakim jest docker compose. Pozwala mi to raz stworzyć konfigurację, w której zostanie uruchomiony kontener i więcej się tym nie przejmować. `docker compose up` zapewnia zawsze identyczną pracę kontenerów oraz łatwą konfigurację dla różnych środowisk.

Dodanie obrazu do rejestru docker huba a potem po prostu spullowanie obrazu na serwerze klienta jest szybkim sposobem na dostarczenie aplikacji do klienta, zwłaszcza na pierwszych (testowych) etapach wdrożenia.


## Git

Każdy programista używa gita i githuba. Jednak postanowiłem pójść krok dalej. Lubię rozumieć to co robię i znać pełne możliwości narzędzi, których używam. Mogę się pochwalić znajomością gita na poziomie ponad średnio-zaawansowanym. 

W skrócie:

1. Potrzebujesz znaleźć różnice w kodzie pomiędzy dwoma branchami: `master` oraz `feature_branch`, ale już mergowałeś mastera do swojego brancha. Dodatkowo do mastera zostały wepchnięte nowe feature'y. Nie chcesz widzieć tych rożnić. Chcesz tylko zobaczyć swój kod wrzucony na brancha. 
Zawołaj mnie.

2. Potrzebujesz stworzyć brancha z commita, który poprzedza rozjazd pomiędzy branchami `master` oraz Twoim (2 commity wstecz od merge-base commita), a potem wyciągnąć treść konkretnego pliku?
Zawołaj mnie.

3. Potrzebujesz zmienić historię commitów?
Zawołaj mnie.

4. Potrzebujesz zrobić checkout na konkretnej rewizji i wrzucić wszystkie jej zmiany do stagingu, zmienić część kodu, stworzyć z tego nowego brancha, a potem zmergować to do innego brancha?
Zawołaj mnie.


## Bash

Ilość aliasów, których używam liczona jest już w setkach. Nie pamiętam kiedy ostatnio raz uruchamiałem ręcznie komendę `docker rm $(docker ps -aq)`. Zamiast tego używam aliasu `dkcc` (akronim od docker clean containers). Dzięki takim małym usprawnieniom, które ulepszam od lat, można śmiało stwierdzić, że moja produktywność oraz prędkość pracy windują do góry. 

Poza tym pisanie skryptów usprawniających pracę moją oraz zespołu to mój chleb powszedni. W momencie, w którym zauważę, że jakiś proces jest powtarzalny i często jestem proszony o pomoc przy jego wykonaniu (na przykład wykonanie kopii zapasowej lokalnej bazy danych u dewelopera), od razu piszę skrypt, który zrobi to za mnie.


## CI/CD

Jedno słowo. Jenkins.
Stworzyłem już kilka kompletnych workflowów używając jobów Jenkinsa. Zdarzyło mi się też używać pipelinów, ale ostatecznie przy projektach (// TODO: Chodzi o to ze przy priojektaj malej wielkosci uznalem to za overkill) uznałem to za overkill.

# Inne języki programowania, których używałem

## C

Jestem fanem C. Wiedza na temat tego jak zbudowane są struktury danych, których w dzisiejszych czasach używa się bez sekundy zastanowienia, jest czymś co według mnie każdy szanujący się programista powienien posiadać. Poza tym uwielbiam prędkość wykonania aplikacji napisanych w C. Uważam, że C jest "enencją programowania", nawet jeśli mówię to jako osoba lubiąca pisać komponenty Reactowe w JavaScripcie :). Ponadto planuję kilka projektów związanych z wykorzystaniem karty graficznej napisanych w C. Całe życie ocieram się o Game Development i chciałbym napisać swój game engine. Oczywiście mówię o prostym, customowym silniku, który będzie w stanie wykonać podstawowe rzeczy, takie jak wyrenderowanie modelu 3D, teksturowanie, animacje i tym podobne. Sporą inspiracją w tej dziedzinie były dla mnie kanały Youtube: jdh oraz Pirate Software.


## C#

Uzywałem C# do napisania moich pierwszych aplikacji Desktopowych. Wiele lat później poznałem pojęcie .NET oraz poznałem ludzi, z którymi (do dzisiaj) spierałem się o użyteczność C#. Nie jestem największym fanem samego języka, ale na pewno w pewnym sensie rozumiem jego popularność. Zdecydowanie nie jestem Javowcem.


## php

Nie będę kłamał. Jeżeli chodzi o praktykę to w php spędziłem najmniej godzin. Zdarzyło mi się modyfikować skrypty Wordpresowe, w celu dodania funkcjonalności, szczególnie jeśli chodzi o sklepy internetowe. Zdarzyło mi się też używać php jako backendu, w celu połączenia się z bazą danych. Jednak ostatecznie wszystkie moje styczności z phpem to promil mojej działalności jako programista, dlatego też język ten znalazł się w tej sekcji.

Ponadto jestem bardzo ciekawy samego języka. Chciałbym w przyszłości lepiej zrozumieć fenomen całego języka oraz powody, dla których większość dzisiejszego internetu wykorzystuje jego funkcjonalności.


# Java

W skrócie:
Nie moja bajka, nie moje kredki.

Swojego czasu używałem Javy, głównie do zabawy, aczkolwiek miałem okazję pisać nawet aplikacje okienkowe z użyciem `JFrame`, czy Rest API z użyciem Spring'a.



# Inne narzędzia, których używam w pracy
- jira
- Jenkins
- obsidian


# Języki

Jako obywatel Polski, mówię natywnie w tym języku.

Angielski jest językiem, które używam codziennie, w rozmowie i piśmie. Pisanie dokumentacji technicznej, kontakt z klientem, czy choćby pisanie moich własnych notatek (posiadam notatki dosłownie WSZYSTKIEGO co robię) są w języku angielskim.


# Zainteresowania


Jako nerd oraz pasjonat, moim błogosławieństwem oraz przekleństwem jest ciągła praca przy komputerze. Robię to też w czasie wolnym. Prowadzę kilka projektów pobocznych naraz. Często o bardzo rozbieżnej tematyce. Przykładowo jestem w trakcie budowania własnego edytora tesktu, którego piszę w języku C. Z drugiej strony piszę aplikację WEB dla rekruterów branży IT.

Jednak jeśli już uda mi się odejść od programowania, jest kilka rzeczy, którym chętnie poświęcam czas:
- Jako amator i pasjonat cyberbezpieczeństwa, uczestniczę w wyzwaniach CTF (Capture the flag), polegających na tym, że jako osoba zewnętrzna należy znaleźć podatności serwera/usługi oraz je wykorzystać w celu przechwycenia flagi (ciągu znaków). Kilka odniesień dla lepszego zobrazowania sytuacji: owasp.org, hackerone.com, hacker101, tryhackme, hackthebox.
- Siatkówka oraz kilka innych sportów (pingpong, pływanie, wspinanie).
- Oczywiście, że GRY KOMPUTEROWE. Pomijając takie oczywistości jak League of Legends czy Coutner-Strike (pamiętam jeszcze wersję 1.6 oraz mod serwerowy CallOfDuty), posiadam ogromny sentyment do Minecrafta. Jeżeli chodzi o tytułe bardziej "świeże" to jestem fanem uniwersum Harrego Pottera, dlatego też kultową jest dla mnie gra "Hogwart Legacy". Poza tym ostatnio coraz bardziej doceniam tytuły przy których mogę się odprężyć, na przykład (pewnie zostanę przez to znienawidzony) Tibia. 
- Prowadzenie biznesu. Ogólnie mówiąc co chwila wymyślam nowy sposób na zarobienie pieniędzy, który testuję. Przez kilka lat prowadziłem kilka sklepów internetowych. Interesuje mnie sfera szeroko pojętego marketingu, w szczególności FacebookAds, GoogleAds, promowania na instagramie.
- Tworzenie gier komputerowych. Swoją przygodę zacząłem chyba od bardzo ubogiej wersji GameMakera (to było 13 lat temu, mogę się mylić). Od kilku lat używałem Unity (które używa C#) do wszystkiego co przyszło mi do głowy. Od próby zaimplementowania gry sieciowej, do wizualizacji algorytmu genetycznego. Dzięki temu hobby nauczyłem się wielu różnych rzeczy z dziedziny IT (tej bardziej kreatywnej części), jak chociażby modelowanie 3D, rysowanie, animowanie, teksturowanie itp. Ostatnio coraz częściej trafiam na poztywne opinie na temat Godota, a że wielkość Unity ostatnio daje mi się we znaki, w najbliższej przyszłości zamierzam się przesiąść. Ogólnie pojęty Game Development jest dla mnie czymś odstresowującym, dzięki czemu mogę w łatwy i szybki sposób zwizualizować pomysł z mojej głowy.


# Kontakt

Najlepszym sposobem kontaktu jest dla mnie e-mail.
E-mail: **michal.przyl@gmail.com**






