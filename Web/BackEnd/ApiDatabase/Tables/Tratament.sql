CREATE TABLE [dbo].[Tratament]
(
	[TratamentId] INT NOT NULL  Identity(1,1), 
    [CNP] INT NOT NULL, 
    [Medicament] NVARCHAR(50) NOT NULL, 
    [Pat] INT NOT NULL, 
    [Diagnostic] NVARCHAR(100) NOT NULL, 
    CONSTRAINT [FK_Tratament_CNP] FOREIGN KEY ([CNP]) REFERENCES [Pacient]([CNP]), 
    CONSTRAINT [PK_TratamentId] PRIMARY KEY ([TratamentId]) ,

)
