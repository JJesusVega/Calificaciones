USE [SistemaEscolarReact]
GO

/****** Object:  Table [dbo].[Alumno]    Script Date: 21/07/2023 01:37:44 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Alumno]') AND type in (N'U'))
DROP TABLE [dbo].[Alumno]
GO

/****** Object:  Table [dbo].[Alumno]    Script Date: 21/07/2023 01:37:44 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Alumno](
	[IdAlumno] [int] IDENTITY (1,1) NOT NULL,
	[CveAlumno] [nvarchar](50) NOT NULL,
	[Nombre] [nvarchar](100) NOT NULL,
	[ApPaterno] [nvarchar](100) NULL,
	[ApMaterno] [nvarchar](100) NULL,
	[Sexo] [nchar](1) NOT NULL,
	[Grado] [smallint] NOT NULL,
	[Grupo] [nchar](1) NULL,
	[FechaInscripcion] [datetime] NOT NULL,
 CONSTRAINT [PK_Alumno] PRIMARY KEY CLUSTERED 
(
	[IdAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/*Tabla boleta*/
USE [SistemaEscolarReact]
GO

/****** Object:  Table [dbo].[Boleta]    Script Date: 21/07/2023 01:39:45 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Boleta]') AND type in (N'U'))
DROP TABLE [dbo].[Boleta]
GO

/****** Object:  Table [dbo].[Boleta]    Script Date: 21/07/2023 01:39:45 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Boleta](
	[IdBoleta] [int] IDENTITY (1,1) NOT NULL,
	[FkAlumno] [int] NOT NULL,
	[FkProfesor] [int] NOT NULL,
 CONSTRAINT [PK_Boleta] PRIMARY KEY CLUSTERED 
(
	[IdBoleta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/*Boleta Detalle*/
USE [SistemaEscolarReact]
GO

/****** Object:  Table [dbo].[BoletaDetalle]    Script Date: 21/07/2023 01:41:03 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[BoletaDetalle]') AND type in (N'U'))
DROP TABLE [dbo].[BoletaDetalle]
GO

/****** Object:  Table [dbo].[BoletaDetalle]    Script Date: 21/07/2023 01:41:03 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[BoletaDetalle](
	[IdBoletaDetalle] [int] IDENTITY (1,1) NOT NULL,
	[FkBoleta] [int] NOT NULL,
	[FkMateria] [int] NOT NULL,
	[Calificacion] [decimal](18, 0) NOT NULL,
 CONSTRAINT [PK_BoletaDetalle] PRIMARY KEY CLUSTERED 
(
	[IdBoletaDetalle] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/*Materia*/
USE [SistemaEscolarReact]
GO

/****** Object:  Table [dbo].[Materia]    Script Date: 21/07/2023 01:42:33 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Materia]') AND type in (N'U'))
DROP TABLE [dbo].[Materia]
GO

/****** Object:  Table [dbo].[Materia]    Script Date: 21/07/2023 01:42:33 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Materia](
	[IdMateria] [int] IDENTITY (1,1)  NOT NULL,
	[CveMateria] [nvarchar](10) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Materia] PRIMARY KEY CLUSTERED 
(
	[IdMateria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/*Profesor*/
USE [SistemaEscolarReact]
GO

/****** Object:  Table [dbo].[Profesor]    Script Date: 21/07/2023 01:43:03 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Profesor]') AND type in (N'U'))
DROP TABLE [dbo].[Profesor]
GO

/****** Object:  Table [dbo].[Profesor]    Script Date: 21/07/2023 01:43:03 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Profesor](
	[IdProfesor] [int] IDENTITY (1,1) NOT NULL,
	[Nombre] [nvarchar](100) NOT NULL,
	[ApPaterno] [nvarchar](100) NOT NULL,
	[ApMaterno] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Profesor] PRIMARY KEY CLUSTERED 
(
	[IdProfesor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/*USUARIO*/
USE [SistemaEscolarReact]
GO

/****** Object:  Table [dbo].[Usuario]    Script Date: 21/07/2023 01:43:37 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Usuario]') AND type in (N'U'))
DROP TABLE [dbo].[Usuario]
GO

/****** Object:  Table [dbo].[Usuario]    Script Date: 21/07/2023 01:43:37 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[Usuario] [nvarchar](20) NOT NULL,
	[Password] [nvarchar](20) NOT NULL,
	[Rol] [nvarchar](20) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


/*Modificaciones de FK*/
ALTER TABLE Boleta
DROP CONSTRAINT FK_AlumnoAlumno;
GO
ALTER TABLE Boleta
   ADD CONSTRAINT FK_AlumnoAlumno FOREIGN KEY (FkAlumno)
      REFERENCES Alumno (IdAlumno)
      ON DELETE CASCADE
      ON UPDATE CASCADE
;
GO
ALTER TABLE Boleta
DROP CONSTRAINT FK_ProfesorProfesor;
GO
ALTER TABLE Boleta
   ADD CONSTRAINT FK_ProfesorProfesor FOREIGN KEY (FkProfesor)
      REFERENCES Profesor (IdProfesor)
      ON DELETE CASCADE
      ON UPDATE CASCADE
;
GO
ALTER TABLE BoletaDetalle
   ADD CONSTRAINT FK_BoletaBoletaDetalle FOREIGN KEY (FkBoleta)
      REFERENCES Boleta (IdBoleta)
      ON DELETE CASCADE
      ON UPDATE CASCADE
;
GO
ALTER TABLE BoletaDetalle
   ADD CONSTRAINT FK_MateriaMateria FOREIGN KEY (FkMateria)
      REFERENCES Materia (IdMateria)
      ON DELETE CASCADE
      ON UPDATE CASCADE
;



