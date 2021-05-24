CREATE TABLE [dbo].[Pacient]
(
	[PacientCNP] BIGINT NOT NULL ,
	[Nume] NVARCHAR(25) NOT NULL, 
    [Prenume] NVARCHAR(50) NOT NULL, 
    [Varsta] INT NOT NULL, 
    [Telefon] INT NOT NULL, 
    [Email] NVARCHAR(75) NOT NULL, 
    [Profesie] NVARCHAR(30) NOT NULL, 
    [LocDeMunca] NVARCHAR(50) NOT NULL, 
    [Sex] BIT NOT NULL, 
    [MedicId] INT NOT NULL, 
    [PacientId] INT NOT NULL IDENTITY(1,1), 
    CONSTRAINT [FK_Pacient_MedicId] FOREIGN KEY ([MedicId]) REFERENCES [Medic]([MedicId]), 
    CONSTRAINT [PK_PacientId] PRIMARY KEY ([PacientId])
)
