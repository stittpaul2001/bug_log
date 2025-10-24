import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"


class BugsService {

  // @ts-ignore
  async getBugById(bugId) {
    const bug = await dbContext.Bugs.findById(bugId).populate('creator')
    if (bug == null) {
      throw new BadRequest(`${bugId} is not a valid Id!`)
    }
    return bug
  }



  async getAllBugs() {
    const bugs = await dbContext.Bugs.find().populate('creator')
    return bugs
  }





}

export const bugsService = new BugsService()