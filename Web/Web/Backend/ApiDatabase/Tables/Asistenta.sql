CREATE TABLE [dbo].[Asistenta]
(
	[AsistentaId] INT NOT NULL, 
    [Nume] NVARCHAR(50) NOT NULL, 
    [Prenume] NVARCHAR(50) NOT NULL, 
    [NumeUtilizator] NVARCHAR(50) NOT NULL, 
    [Parola] NVARCHAR(50) NOT NULL, 
    CONSTRAINT [PK_AsistentaId] PRIMARY KEY ([AsistentaId]) 
)