//import { catalog } from './catalog.js';

const catalog = [
    { author: "Данте Алигьери", title: "Божественная комедия", year: 1315, language: "Итальянский", },
    { author: "Джейн Остин", title: "Гордость и предубеждение", year: 1813, language: "Английский", },
    { author: "Сэмюэл Беккет", title: "Моллой", year: 1952, language: "Французский", },
    { author: "Джованни Боккаччо", title: "Декамерон", year: 1351, language: "Итальянский", },
    { author: "Хорхе Луис Борхес", title: "Вымышленные истории", year: 1965, language: "Испанский", },
    { author: "Эмили Бронте", title: "Грозовой перевал", year: 1847, language: "Английский", },
    { author: "Альбер Камю", title: "Посторонний", year: 1942, language: "Французский", },
    { author: "Луи-Фердинанд Селин", title: "Путешествие на край ночи", year: 1932, language: "Французский", },
    { author: "Мигель де Сервантес", title: "Дон Кихот", year: 1610, language: "Испанский", },
    { author: "Джеффри Чосер", title: "Кентерберийские рассказы", year: 1450, language: "Английский", },
    { author: "Джозеф Конрад", title: "Ностромо", year: 1904, language: "Английский", },
    { author: "Чарльз Диккенс", title: "Большие надежды", year: 1861, language: "Английский", },
    { author: "Дени Дидро", title: "Жак-фаталист и его хозяин", year: 1796, language: "Французский", },
    { author: "Ральф Эллисон", title: "Человек-невидимка", year: 1952, language: "Английский", },
    { author: "Уильям Фолкнер", title: "Авессалом, Авессалом!", year: 1936, language: "Английский", },
    { author: "Уильям Фолкнер", title: "Шум и ярость", year: 1929, language: "Английский", },
    { author: "Гюстав Флобер", title: "Госпожа Бовари", year: 1857, language: "Французский", },
    { author: "Гюстав Флобер", title: "Воспитание чувств", year: 1869, language: "Французский", },
    { author: "Габриэль Гарсия Маркес", title: "Сто лет одиночества", year: 1967, language: "Испанский", },
    { author: "Габриэль Гарсия Маркес", title: "Любовь во время холеры", year: 1985, language: "Испанский", },
    { author: "Иоганн Вольфганг фон Гёте", title: "Фауст", year: 1832, language: "Немецкий", },
    { author: "Гюнтер Грасс", title: "Жестяной барабан", year: 1959, language: "Немецкий", },
    { author: "Жуан Гимарайнш Роза", title: "Тропы по большому сертану", year: 1956, language: "Португальский", },
    { author: "Кнут Гамсун", title: "Голод", year: 1890, language: "Норвежский", },
    { author: "Эрнест Хемингуэй", title: "Старик и море", year: 1952, language: "Английский", },
    { author: "Генрик Ибсен", title: "Кукольный дом", year: 1879, language: "Норвежский", },
    { author: "Джеймс Джойс", title: "Улисс", year: 1922, language: "Английский", },
    { author: "Франц Кафка", title: "Процесс", year: 1925, language: "Немецкий", },
    { author: "Франц Кафка", title: "Замок", year: 1926, language: "Немецкий", },
    { author: "Ясунари Кавабата", title: "Стон горы", year: 1954, language: "Японский", },
    { author: "Никос Казандзакис", title: "Грек Зорба", year: 1946, language: "Греческий", },
    { author: "Дэвид Герберт Лоуренс", title: "Сыновья и любовники", year: 1913, language: "Английский", },
    { author: "Джакомо Леопарди", title: "Стихотворения", year: 1818, language: "Итальянский", },
    { author: "Астрид Линдгрен", title: "Пеппи Длинныйчулок", year: 1945, language: "Шведский", },
    { author: "Лу Синь", title: "Записки сумасшедшего", year: 1918, language: "Китайский", },
    { author: "Нагиб Махфуз", title: "Дети Гебелави", year: 1959, language: "Арабский", },
    { author: "Томас Манн", title: "Будденброки", year: 1901, language: "Немецкий", },
    { author: "Томас Манн", title: "Волшебная гора", year: 1924, language: "Немецкий", },
    { author: "Герман Мелвилл", title: "Моби Дик", year: 1851, language: "Английский", },
    { author: "Эльза Моранте", title: "История", year: 1974, language: "Итальянский", },
    { author: "Тони Моррисон", title: "Возлюбленная", year: 1987, language: "Английский", },
    { author: "Мурасаки Сикибу", title: "Повесть о Гэндзи", year: 1006, language: "Японский", },
    { author: "Роберт Музиль", title: "Человек без свойств", year: 1931, language: "Немецкий", },
    { author: "Владимир Набоков", title: "Лолита", year: 1955, language: "Английский", },
    { author: "Джордж Оруэлл", title: "1984", year: 1949, language: "Английский", },
    { author: "Фернандо Пессоа", title: "Книга непокоя", year: 1928, language: "Португальский", },
    { author: "Марсель Пруст", title: "В поисках утраченного времени", year: 1920, language: "Французский", },
    { author: "Франсуа Рабле", title: "Гаргантюа и Пантагрюэль", year: 1533, language: "Французский", },
    { author: "Хуан Рульфо", title: "Педро Парамо", year: 1955, language: "Испанский", },
    { author: "Салман Рушди", title: "Дети полуночи", year: 1981, language: "Английский", },
    { author: "Уильям Шекспир", title: "Гамлет", year: 1603, language: "Английский", },
    { author: "Уильям Шекспир", title: "Король Лир", year: 1608, language: "Английский", },
    { author: "Уильям Шекспир", title: "Отелло", year: 1609, language: "Английский", },
    { author: "Стендаль", title: "Красное и чёрное", year: 1830, language: "Французский", },
    { author: "Лоренс Стерн", title: "Жизнь и мнения Тристрама Шенди, джентльмена", year: 1760, language: "Английский", },
    { author: "Итало Звево", title: "Самопознание Дзено", year: 1923, language: "Итальянский", },
    { author: "Джонатан Свифт", title: "Путешествия Гулливера", year: 1726, language: "Английский", },
    { author: "Марк Твен", title: "Приключения Гекльберри Финна", year: 1884, language: "Английский", },
    { author: "Уолт Уитмен", title: "Листья травы", year: 1855, language: "Английский", },
    { author: "Вирджиния Вулф", title: "Миссис Дэллоуэй", year: 1925, language: "Английский", },
    { author: "Вирджиния Вулф", title: "На маяк", year: 1927, language: "Английский", },
    { author: "Маргерит Юрсенар", title: "Воспоминания Адриана", year: 1951, language: "Французский" },
    { author: "Денис Фонвизин", title: "Недоросль", year: 1782, language: "Русский" },
    { author: "Николай Карамзин", title: "Бедная Лиза", year: 1792, language: "Русский" },
    { author: "Александр Грибоедов", title: "Горе от ума", year: 1824, language: "Русский" },
    { author: "Александр Пушкин", title: "Евгений Онегин", year: 1830, language: "Русский" },
    { author: "Александр Пушкин", title: "Борис Годунов", year: 1825, language: "Русский" },
    { author: "Александр Пушкин", title: "Повести Белкина", year: 1830, language: "Русский" },
    { author: "Александр Пушкин", title: "Маленькие трагедии", year: 1830, language: "Русский" },
    { author: "Александр Пушкин", title: "Медный всадник", year: 1833, language: "Русский" },
    { author: "Александр Пушкин", title: "Пиковая дама", year: 1833, language: "Русский" },
    { author: "Александр Пушкин", title: "Капитанская дочка", year: 1836, language: "Русский" },
    { author: "Михаил Лермонтов", title: "Герой нашего времени", year: 1839, language: "Русский" },
    { author: "Николай Гоголь", title: "Вечера на хуторе близ Диканьки", year: 1832, language: "Русский" },
    { author: "Николай Гоголь", title: "Миргород", year: 1835, language: "Русский" },
    { author: "Николай Гоголь", title: "Мертвые души", year: 1835, language: "Русский" },
    { author: "Николай Гоголь", title: "Ревизор", year: 1835, language: "Русский" },
    { author: "Николай Гоголь", title: "Тарас Бульба", year: 1842, language: "Русский" },
    { author: "Николай Гоголь", title: "Петербургские повести", year: 1842, language: "Русский" },
    { author: "Александр Герцен", title: "Кто виноват?", year: 1846, language: "Русский" },
    { author: "Иван Гончаров", title: "Обломов", year: 1859, language: "Русский" },
    { author: "Иван Гончаров", title: "Обыкновенная история", year: 1847, language: "Русский" },
    { author: "Иван Тургенев", title: "Записки охотника", year: 1851, language: "Русский" },
    { author: "Иван Тургенев", title: "Муму", year: 1852, language: "Русский" },
    { author: "Иван Тургенев", title: "Дворянское гнездо", year: 1858, language: "Русский" },
    { author: "Иван Тургенев", title: "Ася", year: 1858, language: "Русский" },
    { author: "Иван Тургенев", title: "Отцы и дети", year: 1861, language: "Русский" },
    { author: "Иван Тургенев", title: "Вешние воды", year: 1872, language: "Русский" },
    { author: "Лев Толстой", title: "Детство. Отрочество. Юность", year: 1857, language: "Русский" },
    { author: "Лев Толстой", title: "Война и мир", year: 1869, language: "Русский" },
    { author: "Лев Толстой", title: "Кавказский пленник", year: 1872, language: "Русский" },
    { author: "Лев Толстой", title: "Анна Каренина", year: 1877, language: "Русский" },
    { author: "Лев Толстой", title: "Воскресение", year: 1899, language: "Русский" },
    { author: "Лев Толстой", title: "Крейцерова соната", year: 1889, language: "Русский" },
    { author: "Александр Островский", title: "Гроза", year: 1859, language: "Русский" },
    { author: "Александр Островский", title: "Бесприданница", year: 1878, language: "Русский" },
    { author: "Николай Чернышевский", title: "Что делать?", year: 1863, language: "Русский" },
    { author: "Николай Лесков", title: "Леди Макбет Мценского уезда", year: 1864, language: "Русский" },
    { author: "Николай Лесков", title: "Левша", year: 1881, language: "Русский" },
    { author: "Федор Достоевский", title: "Село Степанчиково и его обитатели", year: 1859, language: "Русский" },
    { author: "Федор Достоевский", title: "Записки из Мертвого дома", year: 1861, language: "Русский" },
    { author: "Федор Достоевский", title: "Преступление и наказание", year: 1866, language: "Русский" },
    { author: "Федор Достоевский", title: "Идиот", year: 1868, language: "Русский" },
    { author: "Федор Достоевский", title: "Бесы", year: 1872, language: "Русский" },
    { author: "Федор Достоевский", title: "Подро́сток", year: 1875, language: "Русский" },
    { author: "Федор Достоевский", title: "Братья Карамазовы", year: 1880, language: "Русский" },
    { author: "Михаил Салтыков-Щедрин", title: "История одного города", year: 1870, language: "Русский" },
    { author: "Михаил Салтыков-Щедрин", title: "Господа Головлевы", year: 1880, language: "Русский" },
    { author: "Николай Некрасов", title: "Кому на Руси жить хорошо", year: 1874, language: "Русский" },
    { author: "Антон Чехов", title: "Драма на охоте", year: 1884, language: "Русский" },
    { author: "Антон Чехов", title: "Рассказы", year: 1903, language: "Русский" },
    { author: "Антон Чехов", title: "Дуэль", year: 1891, language: "Русский" },
    { author: "Антон Чехов", title: "Дядя Ваня", year: 1896, language: "Русский" },
    { author: "Антон Чехов", title: "Чайка", year: 1896, language: "Русский" },
    { author: "Антон Чехов", title: "Три сестры", year: 1900, language: "Русский" },
    { author: "Антон Чехов", title: "Вишневый сад", year: 1903, language: "Русский" },
    { author: "Максим Горький", title: "На дне", year: 1902, language: "Русский" },
    { author: "Максим Горький", title: "Мать", year: 1906, language: "Русский" },
    { author: "Максим Горький", title: "Детство", year: 1914, language: "Русский" },
    { author: "Максим Горький", title: "Жизнь Клима Самгина", year: 1936, language: "Русский" },
    { author: "Леонид Андреев", title: "Красный смех", year: 1904, language: "Русский" },
    { author: "Александр Куприн", title: "Олеся", year: 1898, language: "Русский" },
    { author: "Александр Куприн", title: "Гранатовый браслет", year: 1910, language: "Русский" },
    { author: "Андрей Белый", title: "Петербург", year: 1913, language: "Русский" },
    { author: "Евгений Замятин", title: "Мы", year: 1920, language: "Русский" },
    { author: "Иван Бунин", title: "Антоновские яблоки", year: 1900, language: "Русский" },
    { author: "Иван Бунин", title: "Лёгкое дыхание", year: 1915, language: "Русский" },
    { author: "Иван Бунин", title: "Митина любовь", year: 1924, language: "Русский" },
    { author: "Иван Бунин", title: "Темные аллеи", year: 1949, language: "Русский" },
    { author: "Александр Грин", title: "Алые паруса", year: 1922, language: "Русский" },
    { author: "Юрий Олеша", title: "Три Толстяка", year: 1924, language: "Русский" },
    { author: "Исаак Бабель", title: "Одесские рассказы", year: 1924, language: "Русский" },
    { author: "Алексей Н. Толстой", title: "Петр Первый", year: 1945, language: "Русский" },
    { author: "Алексей Н. Толстой", title: "Хождение по мукам", year: 1941, language: "Русский" },
    { author: "Михаил Булгаков", title: "Собачье сердце", year: 1925, language: "Русский" },
    { author: "Михаил Булгаков", title: "Белая гвардия", year: 1925, language: "Русский" },
    { author: "Михаил Булгаков", title: "Записки юного врача", year: 1926, language: "Русский" },
    { author: "Михаил Булгаков", title: "Мастер и Маргарита", year: 1940, language: "Русский" },
    { author: "Илья Ильф и Евгений Петров", title: "12 стульев", year: 1927, language: "Русский" },
    { author: "Илья Ильф и Евгений Петров", title: "Золотой теленок", year: 1931, language: "Русский" },
    { author: "Михаил Шолохов", title: "Донские рассказы", year: 1926, language: "Русский" },
    { author: "Михаил Шолохов", title: "Тихий дон", year: 1940, language: "Русский" },
    { author: "Андрей Платонов", title: "Чевенгур", year: 1928, language: "Русский" },
    { author: "Андрей Платонов", title: "Котлован", year: 1930, language: "Русский" },
    { author: "Николай Островский", title: "Как закалялась сталь", year: 1934, language: "Русский" },
    { author: "Михаил Зощенко", title: "Рассказы о Леле и Миньке", year: 1945, language: "Русский" },
    { author: "Михаил Зощенко", title: "Перед восходом солнца", year: 1943, language: "Русский" },
    { author: "Даниил Хармс", title: "Старуха", year: 1939, language: "Русский" },
    { author: "Евгений Шварц", title: "Дракон", year: 1944, language: "Русский" },
    { author: "Валентин Катаев", title: "Белеет парус одинокий", year: 1936, language: "Русский" },
    { author: "Валентин Катаев", title: "Сын полка", year: 1944, language: "Русский" },
    { author: "Вениамин Каверин", title: "Два капитана", year: 1944, language: "Русский" },
    { author: "Константин Паустовский", title: "Повесть о жизни", year: 1963, language: "Русский" },
    { author: "Борис Пастернак", title: "Доктор Живаго", year: 1955, language: "Русский" },
    { author: "Александр Фадеев", title: "Молодая гвардия", year: 1946, language: "Русский" },
    { author: "Василий Гроссман", title: "Жизнь и судьба", year: 1959, language: "Русский" },
    { author: "Борис Васильев", title: "А зори здесь тихие", year: 1969, language: "Русский" },
    { author: "Аркадий и Борис Стругацкие", title: "Пикник на обочине", year: 1972, language: "Русский" },
    { author: "Василий Шукшин", title: "Калина красная", year: 1973, language: "Русский" },
    { author: "Фазиль Искандер", title: "Кролики и удавы", year: 1982, language: "Русский" },
    { author: "Сергей Довлатов", title: "Заповедник", year: 1983, language: "Русский" },
    { author: "Сергей Довлатов", title: "Чемодан", year: 1986, language: "Русский" },
]


function lang(arr){
    const b = arr.length;
    const lan_arr = [];
        for (let i=0;i<b;i++){
            lan_arr.push(arr[i].language);
        }
        let arr_1 = new Set(lan_arr);
        return arr_1;
}
function year(arr, century){
    const b = arr.length;
    const year_arr = [];
        for (let i=0;i<b;i++){
            if( (arr[i].year<century*100)&&((century-1)*100<=arr[i].year) ){
                year_arr.push(arr[i])
            } else {}
        }
        return year_arr;    
}
function authot_title(arr, search){
    const b = arr.length;
    const search_arr = [];
        for (let i=0;i<b;i++){
            if ((arr[i].author == search) || (arr[i].title == search)){
                search_arr.push(arr[i]);
            } else {}
        }
        return search_arr;    
}

const century = 14;
const search = "Война и мир";

console.log(year(catalog, century));