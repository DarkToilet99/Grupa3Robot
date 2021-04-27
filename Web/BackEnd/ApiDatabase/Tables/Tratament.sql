CREATE TABLE [dbo].[Tratament]
(
	[TratamentId] INT NOT NULL  Identity(1,1), 
    [PacientCNP] INT NOT NULL, 
    [Medicament] NVARCHAR(50) NOT NULL, 
    [Pat] INT NOT NULL, 
    [Diagnostic] NVARCHAR(100) NOT NULL, 
    CONSTRAINT [PK_TratamentId] PRIMARY KEY ([TratamentId]), 
    CONSTRAINT [FK_Tratament_PacientCNP] FOREIGN KEY ([PacientCNP]) REFERENCES [Pacient]([PacientCNP]) ,

)
