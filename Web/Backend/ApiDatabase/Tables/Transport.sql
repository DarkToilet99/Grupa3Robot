CREATE TABLE [dbo].[Transport]
(
	[TransportId] INT NOT NULL PRIMARY KEY, 
    [RobotId] INT NOT NULL, 
    [Data] DATETIME NOT NULL, 
    [Efectuat] BIT NOT NULL, 
    CONSTRAINT [FK_Transport_RobotId] FOREIGN KEY ([RobotId]) REFERENCES [Robot]([RobotId])
)