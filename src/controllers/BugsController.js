import { bugsService } from "../services/BugsService.js";
import BaseController from "../utils/BaseController.js";


export class BugsController extends BaseController {
  constructor() {
    super('api/bugs'),
      this.router
        .get('', this.getAllBugs)
        .get('/:bugId', this.getBugById)



  }

  /**
   * Creates a new value from request body and returns the value
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */

  async getBugById(request, response, next) {
    try {
      const bugId = request.params.bugId
      const bug = await bugsService.getBugById(bugId)
      response.send(bug)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a new value from request body and returns the value
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */

  async getAllBugs(request, response, next) {
    try {
      const bugs = await bugsService.getAllBugs()
    } catch (error) {
      next(error)
    }
  }


}