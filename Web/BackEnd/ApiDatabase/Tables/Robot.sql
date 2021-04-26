CREATE TABLE [dbo].[Robot]
(
	[RobotId] INT NOT NULL, 
    [TratamentId] INT NOT NULL, 
    [Ocupat] BIT NOT NULL, 
    CONSTRAINT [PK_RobotId] PRIMARY KEY ([RobotId]), 
    CONSTRAINT [FK_Robot_TratamentId] FOREIGN KEY ([TratamentId]) REFERENCES [Tratament]([TratamentId]) 
)
