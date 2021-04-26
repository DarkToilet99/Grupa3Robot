CREATE TABLE [dbo].[Pacient]
(
	[CNP] INT NOT NULL ,
	[Nume] NVARCHAR(25) NOT NULL, 
    [Prenume] NVARCHAR(50) NOT NULL, 
    [Varsta] INT NOT NULL, 
    [Telefon] INT NOT NULL, 
    [Email] NVARCHAR(75) NOT NULL, 
    [Profesie] NVARCHAR(30) NOT NULL, 
    [LocDeMunca] NVARCHAR(50) NOT NULL, 
    [Sex] BIT NOT NULL, 
    CONSTRAINT [PK_Pacient_CNP] PRIMARY KEY ([CNP])
)
