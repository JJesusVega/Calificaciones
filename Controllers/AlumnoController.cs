using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaEscolarReact.Models;
using System.Diagnostics.Contracts;

namespace SistemaEscolarReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private readonly SistemaEscolarReactContext _dbContext;

        public AlumnoController(SistemaEscolarReactContext dbContext) 
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Alumno> lstAlumnos = await _dbContext.Alumnos.OrderByDescending(c => c.IdAlumno).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lstAlumnos);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Alumno request)
        {
            await _dbContext.Alumnos.AddAsync(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Alumno request)
        {
            _dbContext.Alumnos.Update(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Alumno alumno = _dbContext.Alumnos.Find(id);

            _dbContext.Alumnos.Remove(alumno);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

    }
}
