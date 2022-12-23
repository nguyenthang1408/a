import React from "react";
import {
  StylesHeaderTitle,
  WrapperHeaderTitle,
  Tour,
  ImgTour,
  LabelTour,
  WrapperTourTitle,
  WrapperHotelTitle,
  WrapperTicketTitle,
  ContentTour,
} from "./HeaderTitle.styles";

export default function HeaderTitle() {
  return (
    <StylesHeaderTitle>
      <WrapperHeaderTitle>
        <Tour>
          <ImgTour src="src/assets/s1.png" />
          <WrapperTourTitle>
            <LabelTour>Chuyên Tour 4 Đảo</LabelTour>
            <ContentTour>
              Trải nghiệm dịch vụ lặn ngắm san hô chuyên nghiệp với giá cực rẻ.
            </ContentTour>
          </WrapperTourTitle>
        </Tour>

        <Tour>
          <ImgTour src="src/assets/s22.png" />
          <WrapperHotelTitle>
            <LabelTour>Khách Sạn Giá Rẻ</LabelTour>
            <ContentTour>
              Cung cấp dịch vụ đặt phòng khách sạn tiện lợi, tiết kiệm.
            </ContentTour>
          </WrapperHotelTitle>
        </Tour>

        <Tour>
          <ImgTour src="src/assets/s3.png" />
          <WrapperTicketTitle>
            <LabelTour>Xuất Vé Nhanh Chóng 24/7</LabelTour>
            <ContentTour>
              Kiểm tra vé tiện lợi, nhanh chóng, bất cứ đâu và bất kỳ lúc nào.
            </ContentTour>
          </WrapperTicketTitle>
        </Tour>
      </WrapperHeaderTitle>
    </StylesHeaderTitle>
  );
}
