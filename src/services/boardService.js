/* eslint-disable no-useless-catch */
import ApiError from "../utils/ApiError.js";
import { slugify } from "../utils/formatters.js";

const creatNew = async (reqBody) => {
  try {
    // Xử lý logic dữ liệu tùy đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    //Gọi tới tầng Model để xử lý lưu bản ghi newBoard vào trong Database

    //Làm thêm các xử lý logic khác với các Collection kahcs tùy đặc thù dự án
    //Bán email,notification về cho amin khi có 1 cái board mới được tạo

    //trả kết quả trong, service luôn phải có return
    return newBoard;
  } catch (error) { throw error; }
}

export const boardService = {
  creatNew
}