CREATE TABLE longBookList (
    isbn TEXT PRIMARY KEY,
    title TEXT,
    author TEXT,
    publisher TEXT,
    published DATE,
    year INTEGER,
    votes INTEGER,
    rating REAL,
    format TEXT,
    pages INTEGER
);

INSERT INTO longBookList VALUES
('9781925498554','The Stolen Bicycle','Wu Ming-yi','Commonwealth Publishing','2017-08-28',2018,1467,3.88,'paperback',416),
('9780099590088','Lincoln in the Bardo','George Saunders','Bloomsbury Publishing','2017-02-14',2017,2100,4.05,'hardcover',368),
('9780241977793','Autumn','Ali Smith','Penguin Books','2016-10-20',2017,980,3.75,'paperback',264),
('9781784702113','Swing Time','Zadie Smith','Hamish Hamilton','2016-11-15',2017,1500,3.66,'hardcover',464),
('9780701187934','The Sellout','Paul Beatty','Farrar, Straus and Giroux','2015-03-03',2016,1750,3.91,'paperback',304),
('9780099598251','Hot Milk','Deborah Levy','Hamish Hamilton','2016-05-05',2016,890,3.54,'paperback',240),
('9781846558238','A Brief History of Seven Killings','Marlon James','Oneworld Publications','2014-10-02',2015,2200,3.85,'paperback',704),
('9780385542074','The Goldfinch','Donna Tartt','Little, Brown and Company','2013-10-22',2014,2500,3.94,'hardcover',771),
('9780312429980','The Luminaries','Eleanor Catton','Granta Books','2013-08-20',2013,1800,3.71,'paperback',848),
('9780099571353','Bring Up the Bodies','Hilary Mantel','Fourth Estate','2012-05-08',2012,2100,4.10,'hardcover',432),
('9780330458534','Wolf Hall','Hilary Mantel','Fourth Estate','2009-04-30',2009,2300,4.00,'paperback',672),
('9780307269997','The Road','Cormac McCarthy','Alfred A. Knopf','2006-09-26',2007,2700,3.97,'paperback',287),
('9780141033570','Never Let Me Go','Kazuo Ishiguro','Faber & Faber','2005-03-03',2005,1900,3.83,'paperback',288),
('9780747599875','The White Tiger','Aravind Adiga','Free Press','2008-04-22',2008,1600,3.78,'paperback',320),
('9780151010264','The Known World','Edward P. Jones','Amistad','2003-02-04',2003,1400,3.82,'hardcover',388),
('9780385721790','Middlesex','Jeffrey Eugenides','Picador','2002-09-04',2002,2100,4.00,'paperback',544),
('9780679760801','Beloved','Toni Morrison','Vintage Books','1987-09-16',1987,3000,3.93,'paperback',324),
('9780141187761','The God of Small Things','Arundhati Roy','IndiaInk','1997-04-01',1997,2500,3.95,'paperback',339),
('9780679734529','Invisible Man','Ralph Ellison','Vintage Books','1952-04-14',1952,3200,4.14,'paperback',581),
('9780142437230','Moby-Dick','Herman Melville','Penguin Classics','1851-10-18',1851,5000,3.50,'paperback',720);
