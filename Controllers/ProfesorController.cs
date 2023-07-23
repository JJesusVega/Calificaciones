using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaEscolarReact.Models;

namespace SistemaEscolarReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfesorController : ControllerBase
    {
        private readonly SistemaEscolarReactContext _dbContext;

        public ProfesorController(SistemaEscolarReactContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Profesor> lstProfesores = await _dbContext.Profesores.OrderByDescending(c => c.IdProfesor).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lstProfesores);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Profesor request)
        {
            await _dbContext.Profesores.AddAsync(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Profesor request)
        {
            _dbContext.Profesores.Update(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Alumno profesor = _dbContext.Profesores.Find(id);

            _dbContext.Alumnos.Remove(profesor);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
