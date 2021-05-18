CREATE TABLE [dbo].[User]
(
	[UserId] INT NOT NULL IDENTITY(1,1), 
    [Username] NVARCHAR(50) NOT NULL, 
    [Password] NVARCHAR(50) NOT NULL, 
    CONSTRAINT [PK_UserId] PRIMARY KEY ([UserId])
)
