CREATE TABLE [dbo].[Medic]
(
	[MedicId] INT NOT NULL Identity(1,1), 
    [Nume] NVARCHAR(50) NOT NULL, 
    [Prenume] NVARCHAR(50) NOT NULL, 
    [CodParafa] INT NOT NULL, 
    [Parola] NVARCHAR(50) NOT NULL, 
    CONSTRAINT [PK_MedicId] PRIMARY KEY ([MedicId])
)
