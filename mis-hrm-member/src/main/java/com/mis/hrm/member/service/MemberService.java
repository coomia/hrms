package com.mis.hrm.member.service;

import com.mis.hrm.member.model.Member;
import com.mis.hrm.util.BaseService;
import com.mis.hrm.util.Pager;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MemberService extends BaseService<Member> {
    //批量删除
    int deleteByNums(List<String> nums,String companyId);

    //统计成员总数
    Integer countMembers(Member member);

    /**
     *  过滤
     */
    List<Member> filter(Pager<Member> pager, Member member);

    void importMemberFromExcel(MultipartFile file) throws IOException;
}
